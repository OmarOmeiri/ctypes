/**
 * All interfaces refering to Error logging are defined here.
 * @module ErrorInterfaces
 * @category Errors
 */

import { Request, Response } from '../http';

const CommonErrors = {
  EvalError: '1',
  RangeError: '2',
  ReferenceError: '3',
  SyntaxError: '4',
  TypeError: '5',
  URIError: '6',
  AggregateError: '7',
  AssertionError: '8',
} as const;

const GeneralErrors = {
  /** Missing data */
  missingDataError: '1001',
  /** Not found error */
  notFoundError: '1002',
  /** Remote file error */
  remoteFileError: '1003',
  /** Unknown error */
  unknownError: '1004',
  /** Uncaught error */
  unCaughtError: '1005',
  /** Unknown error thrown */
  unknownErrorThrown: '1006',
  /** Error Callback error */
  errorCallbackError: '1007',
  /** Bad Data error */
  badDataError: '1008',
  /** Critical Error */
  CriticalError: '1009',
} as const;

const DataErrors = {
  dataValidationError: '2001',
};

const EnvironmentErrors = {
  /** Error reading ENV variables */
  processEnvError: '3001',
  /** Error reading from config file */
  configEnvError: '3002',
} as const;

const ServerErrors = {
  /** General server error */
  serverError: '4001',
  /** Test server initializaton error */
  testServerInitError: '4002',
} as const;

const APIErrors = {
  /** API path syntax error */
  apiPathError: '5001',
} as const;

const IncomingRequestErrors = {
  /** Request data missing */
  missingReqData: '6001',
  /** Invalid request data */
  falseReqData: '6002',
  /** Request validation error */
  reqValidationError: '6003',
  /** Unknown request keys */
  unknownReqKeysError: '6004',
} as const;

const OutgoingRequestErrors = {
  /** External request error */
  extReqError: '7001',
  apiUsageError: '7002',
} as const;

const FileSystemErrors = {
  /** Rename file error */
  renameFileError: '8001',
  /** Delete file error */
  deleteFileError: '8002',
  /** Write file error */
  writeFileError: '8003',
  /** Read file error */
  readFileError: '8004',
  /** Unzip file error */
  unzipFileError: '8005',
  /** Download file error */
  downloadFileError: '8006',
  /** File not found error */
  fileNotFoundError: '8007',
} as const;

const DBErrors = {
  /** Update DB error */
  mongoUpdtError: '9001',
  /** Read DB error */
  mongoQueryError: '9002',
  /** Write to DB error */
  mongoWriteError: '9003',
  /** Write to DB error */
  mongoDeleteError: '9004',
  /** ObjectId casting error */
  ObjectIDCastError: '9005',
  /** Mongo error */
  mongoError: '9006',
  /** Not found error */
  DBDocumentMissingError: '9007',
  /** DB error */
  DBError: '9008',
} as const;

const CacheErrors = {
  /** Cache Instance init error */
  cacheInitError: '10001',
  /** Cache error */
  cacheError: '10002',
} as const;

const WebSocketsErrors = {
  /** Web Socket Instance init error */
  webSocketInitError: '11001',
} as const;

const JobSchedulingErrors = {
  /** Duplicate Job ID */
  duplicateJobId: '12001',
  /** Job ID not found */
  jobIdNotFound: '12002',
  /** Error in job cancel */
  jobCancelError: '12003',
  /** Recurrence Rule error */
  recurrenceRuleError: '12004',
} as const;

const AWSS3Errors = {
  /** S3 file read error */
  awsS3ReadError: '13001',
  /** S3 file write error */
  awsS3WriteError: '13002',
  /** S3 file delete error */
  awsS3DeleteError: '13003',
  /** S3 bucket not found */
  S3BucketNotFound: '13004',
  /** S3 create bucket error */
  awsS3CreateBucketError: '13005',
  /** S3 upload event error */
  awsS3UploadEventError: '13006',
} as const;

const UserErrors = {
  /** User not found */
  userNotFound: '13001',
  /** User already exixts */
  userExistsError: '13002',
  /** Change user password error  */
  chgPasswordCodeError: '13007',
} as const;

const AuthErrors = {
  /** Auth error */
  authError: '14001',
  /** Invalid credentials error */
  invalidCredentialsError: '14002',
} as const;

const ForbiddenErrors = {
  /** Operation not permitted */
  notAllowedError: '15001',
} as const;

const EmailErrors = {
  /** Error in sending email */
  emailSendError: '16001',
  /** Email authentication error */
  emailAuthError: '16002',
} as const;

const PaymentErrors = {
  /** Payment data missing */
  missingPaymentInfo: '17001',
} as const;

const PaymentProcesserErrors = {
  /** GN (payment processer) data missing */
  missingGNData: '18003',
} as const;

const FormErrors = {
  /** Form validation error */
  formValidationError: '19101',
  /** Form change error */
  formChangeError: '19102',
  /** Form build error */
  formBuildError: '19103',
  /** Form typing error */
  formTypingError: '19104',
} as const;

const UIErrors = {
  /** Get htmlelement error */
  getHtmlElmError: '20201',
  /** HTML attribute error */
  htmlAttrError: '20202',
  /** HTML append error */
  htmlAppendError: '20204',
  /** Position fixing error */
  positionFixedError: '20301',
  /** tab navigation Error */
  tabNavigationError: '20302',
  /** Drag event Error */
  dragEventError: '20302',
} as const;

const ReactErrors = {
  /** State initialization error */
  stateInitError: '21401',
  /** State management error */
  stateError: '21402',
  /** SetState error */
  setStateError: '21403',
  /** State management error */
  useRefInitError: '21501',
  /** Init Context value error */
  useContextInitError: '21501',
  /** Prop forwarding error */
  propForwardingError: '21701',
} as const;

const BeaconApiErrors = {
  /** BEACON API */
  beaconApiSendError: '22001',
} as const;

// ##  LULLO-COMMERCE ERRORS  ##

const LulloStoreErrors = {
  /** Store ID not found */
  storeNotFound: '23008',
  /** Store ID missing in request */
  noStoreID: '23001',
  /** Store URL missing */
  missingStoreURL: '23002',
} as const;

const StockErrors = {
  /** SKU create error */
  skuCreateError: '24001',
} as const;

const ProductErrors = {
  /** Partial Success Product Save */
  productSavePartialSuccess: '25001',
} as const;

const ShippingErrors = {
  /** No compliant shipping box */
  noCompliantShippingBox: '26001',
} as const;

// ##  LULLO-FIN ERRORS  ##

const CVMErrors = {
  /** CVM Files parsing error */
  CVMFileParseError: '27001',
  /** CVM Remote files error */
  CVMRemoteFilesError: '27002',
  /** CVM Local file structure error */
  CVMLocalFileStructureError: '27003',
  /** CVM Document class error */
  CVMDocClassError: '27004',
  /** CVM Url error */
  CVMUrlError: '27005',
} as const;

const RScriptErrors = {
  /** R Script error */
  RScriptError: '28001',
} as const;

const RChildProcessErrors = {
  /** R Script error */
  ChildProcessError: '29001',
} as const;

/**
* All error codes
*/
export const ErrorCodes = {
  ...CommonErrors,
  ...GeneralErrors,
  ...DataErrors,
  ...EnvironmentErrors,
  ...ServerErrors,
  ...APIErrors,
  ...IncomingRequestErrors,
  ...OutgoingRequestErrors,
  ...FileSystemErrors,
  ...DBErrors,
  ...CacheErrors,
  ...WebSocketsErrors,
  ...JobSchedulingErrors,
  ...AWSS3Errors,
  ...UserErrors,
  ...AuthErrors,
  ...ForbiddenErrors,
  ...EmailErrors,
  ...PaymentErrors,
  ...PaymentProcesserErrors,
  ...FormErrors,
  ...UIErrors,
  ...ReactErrors,
  ...BeaconApiErrors,
  ...LulloStoreErrors,
  ...StockErrors,
  ...ProductErrors,
  ...ShippingErrors,
  ...CVMErrors,
  ...RScriptErrors,
  ...RChildProcessErrors,
};

export type ErrorCodes = ValueOf<typeof ErrorCodes>

export enum errType {
  warn = 'warning',
  err = 'error',
  partialSuccess = 'partialSuccess'
}

/**
 * Error interface all errors thrown in the API should conform to this.
 */
export interface IErr {
  /** HTTP response code */
  status: number,
  /** Internal error code. See {@link ErrorCodes} */
  code: ValueOf<typeof ErrorCodes>,
  /** Error message */
  message: string,
  /** Extra error info */
  extra?: string,
  /** Error stack trace. */
  stack?: string,
  /**
   * Should this error be logged
   * if false, will send error to front-end,
   * but will not be saved in the logs.
   *
   * Useful for errors that are not important,
   * like user has typed a wrong password.
   */
  save?: boolean
  /** Error type */
  type?: errType
  /** extra data to send in the response */
  responseJson?: {[key: string]: any}
  data?: {[key: string]: any}
}

export type ErrorNames = keyof typeof ErrorCodes;

/**
 * Error interface after processing.
 *
 * The error log should conform to this.
 */
export interface ErrorLog extends IErr {
  name: ErrorNames,
  origin?: string,
  route?: string,
  method?: string,
  userId?: string,
  restrictedUserId?: string,
}

/**
 * Warning interface sent to the Error ApiException class.
 */
export interface IWarn extends IErr {
  req?: Request<any>;
}

export interface WarnLog extends ErrorLog {}

/**
 * Error interface sent to the Error ApiException class.
 */
export interface IApiError<Rq, Rs> extends IErr {
  /** Express Request Type. See {@link express.Request} */
  req: Request<Rq>,
  /** Express Response Type. See {@link express.Response} */
  res: Response<Rs>,
}
