/* eslint-disable import/no-extraneous-dependencies, @typescript-eslint/no-var-requires, consistent-return */
const glob = require('glob');
const path = require('path');
const { writeFile, readFile } = require('fs/promises');
const { execSync } = require('child_process');
const { dirname } = require('path');

const patterns = {
  index: /^index(\.d)?\.ts$/,
  extension: /(\.d)*\.ts$/,
  hasExports: /^export\s/m,
  selfReference: /from 'lullo-common-types'/gm,
  exportsDefault: /^export\sdefault.*/m,
  defaultExportName: /(?<=\bdefault\s|\bdefault\.\s)(\w+)/m,
  declarationFile: /\.d\.ts$/,
};

const basePath = './finwiz';
const indexPath = './finwiz/index.ts';
const declarationIndexWritePath = './build/finwiz/index.d.ts';
const rootIndexPath = `${execSync('pwd').toString().replace(/\n/g, '')}/index`;

const fileIsAModule = async (fileStr) => {
  if (patterns.hasExports.test(fileStr)) return true;
  return false;
};

const checkSelfReference = async (fileStr, filePath) => {
  const matches = fileStr.match(patterns.selfReference);
  if (!matches) return;
  const absolutePath = path.dirname(path.resolve(filePath));

  const relativePath = path.relative(absolutePath, rootIndexPath);
  const newFile = fileStr.replace(/lullo-common-types/g, relativePath);
  await writeFile(filePath, newFile);
};

const getDefaultExport = (fileStr) => {
  const defaultExportMatch = fileStr.match(patterns.exportsDefault);
  if (!defaultExportMatch) return;
  const nameMatch = defaultExportMatch[0].match(patterns.defaultExportName);
  if (!nameMatch) throw new Error('Could not find default export name');
  return nameMatch[0];
};

const getIndexFileReExportName = (filePath, indexFiles) => {
  const fileName = path.basename(filePath);
  if (fileName.includes('dependencies')) return;
  if (patterns.index.test(fileName)) {
    const pathSplit = path.dirname(filePath).split(path.sep);
    let ix = -1;
    let dirName = pathSplit.slice(ix)[0];
    if (dirName.includes('dependencies')) return;
    while (indexFiles.includes(dirName)) {
      ix -= 1;
      dirName = pathSplit
        .slice(ix)
        .map((p, i) => {
          if (!i) return p;
          return p.charAt(0).toUpperCase() + p.slice(1);
        }).join('');
    }
    return dirName;
  }
};

const write = async (writePath, { starExports, defaultExports, indexFilesExports }) => {
  const allExports = [];
  for (const starExport of starExports) {
    allExports.push(`export * from '${starExport}';`);
  }
  if (defaultExports.length) allExports.push('// DEFAULT EXPORTS');
  for (const defaultExport of defaultExports) {
    allExports.push(`export { default as ${defaultExport.name} } from '${defaultExport.path}';`);
  }
  if (indexFilesExports.length) allExports.push('// INDEX FILES');
  for (const indexFilesExport of indexFilesExports) {
    allExports.push(`export * as ${indexFilesExport.name} from '${indexFilesExport.path}';`);
  }
  await writeFile(writePath, `${allExports.join('\n')}\n`);
};

const getExports = async (file, {
  allExportNames,
  indexFilesExports,
  defaultExports,
  starExports,
}) => {
  const noExtension = file.replace(patterns.extension, '');
  const exportPath = `./${path.relative(basePath, noExtension)}`;
  const indexFileExportName = getIndexFileReExportName(file, allExportNames);
  if (indexFileExportName) {
    allExportNames.push(indexFileExportName);
    indexFilesExports.push({ name: indexFileExportName, path: exportPath });
    return;
  }
  const fileStr = (await readFile(file)).toString();
  if ((await fileIsAModule(fileStr))) {
    await checkSelfReference(fileStr, file);
    const defaultExportName = getDefaultExport(fileStr);
    if (defaultExportName) {
      allExportNames.push(defaultExportName);
      defaultExports.push({ name: defaultExportName, path: exportPath });
    }
    starExports.push(exportPath);
  }
};

glob('./finwiz/**/*+(.js|.ts)', {}, async (er, files) => {
  const declarationIndex = {
    defaultExports: [],
    starExports: [],
    indexFilesExports: [],
    allExportNames: [],
  };

  for await (const file of files) {
    if (file === indexPath) continue;
    await getExports(file, declarationIndex);
  }
  await write(declarationIndexWritePath, declarationIndex);
});
