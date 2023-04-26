#!/usr/bin/env bash

rm -rf ./build
tsc --p tsconfig.production.json
mkdir -p ./build/finwiz && cp -r ./finwiz/* ./build/finwiz
find ./build -type f -name '*.ts' ! -name '*.d.ts' | xargs -r rm || false
node ./scripts/postBuild.js
