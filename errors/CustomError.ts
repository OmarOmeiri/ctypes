/**
 * @module CustomError
 * @category ErrorHandling
 *
 * This class should be used to throw all server errors that are not related to the API's request and responses.
 *
 * For example: Development errors or errors that should not be reported to the client.
 */
import {
  ErrorCodes,
  errType,
  ErrorNames,
  IErr,
} from './errors';

interface ICustomError {
  message: string,
  extra?: IErr['extra'];
  save?: IErr['save'];
  code: ValueOf<typeof ErrorCodes>;
  type?: errType;
  exitCode?: number
}

class CustomError extends Error {
  extra: IErr['extra'];
  save: IErr['save'];
  code: ValueOf<typeof ErrorCodes>;
  name: ErrorNames;
  type: errType;

  constructor(err: ICustomError) {
    super(err.message);
    Error.captureStackTrace(this, this.constructor);
    this.extra = err.extra;
    this.name = this.getErrorName(err.code);
    this.code = err.code;
    this.save = err.save || true;
    this.type = err.type || errType.err;

    if (typeof err.exitCode === 'number') {
      process.exit(err.exitCode);
    }
  }

  private getErrorName(code: ValueOf<typeof ErrorCodes>): ErrorNames {
    return Object.keys(ErrorCodes)[Object.values(ErrorCodes).indexOf(code)] as ErrorNames;
  }
}

export default CustomError;
