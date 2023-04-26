interface IncomingHttpHeaders {
  accept?: string | undefined;
  'accept-language'?: string | undefined;
  'accept-patch'?: string | undefined;
  'accept-ranges'?: string | undefined;
  'access-control-allow-credentials'?: string | undefined;
  'access-control-allow-headers'?: string | undefined;
  'access-control-allow-methods'?: string | undefined;
  'access-control-allow-origin'?: string | undefined;
  'access-control-expose-headers'?: string | undefined;
  'access-control-max-age'?: string | undefined;
  'access-control-request-headers'?: string | undefined;
  'access-control-request-method'?: string | undefined;
  age?: string | undefined;
  allow?: string | undefined;
  'alt-svc'?: string | undefined;
  authorization?: string | undefined;
  'cache-control'?: string | undefined;
  connection?: string | undefined;
  'content-disposition'?: string | undefined;
  'content-encoding'?: string | undefined;
  'content-language'?: string | undefined;
  'content-length'?: string | undefined;
  'content-location'?: string | undefined;
  'content-range'?: string | undefined;
  'content-type'?: string | undefined;
  cookie?: string | undefined;
  date?: string | undefined;
  etag?: string | undefined;
  expect?: string | undefined;
  expires?: string | undefined;
  forwarded?: string | undefined;
  from?: string | undefined;
  host?: string | undefined;
  'if-match'?: string | undefined;
  'if-modified-since'?: string | undefined;
  'if-none-match'?: string | undefined;
  'if-unmodified-since'?: string | undefined;
  'last-modified'?: string | undefined;
  location?: string | undefined;
  origin?: string | undefined;
  pragma?: string | undefined;
  'proxy-authenticate'?: string | undefined;
  'proxy-authorization'?: string | undefined;
  'public-key-pins'?: string | undefined;
  range?: string | undefined;
  referer?: string | undefined;
  'retry-after'?: string | undefined;
  'sec-websocket-accept'?: string | undefined;
  'sec-websocket-extensions'?: string | undefined;
  'sec-websocket-key'?: string | undefined;
  'sec-websocket-protocol'?: string | undefined;
  'sec-websocket-version'?: string | undefined;
  'set-cookie'?: string[] | undefined;
  'strict-transport-security'?: string | undefined;
  tk?: string | undefined;
  trailer?: string | undefined;
  'transfer-encoding'?: string | undefined;
  upgrade?: string | undefined;
  'user-agent'?: string | undefined;
  vary?: string | undefined;
  via?: string | undefined;
  warning?: string | undefined;
  'www-authenticate'?: string | undefined;
}

/**
 * Headers before middleware altering
 */
export type CustomHeadersPre = {
  user?: string,
  'x-req-id': string,
  'x-auth-token'?: string,
  'server-admin'?: 'false' | 'true',
}

/**
 * Headers after middleware altering.
 *
 * For example: A middleware that parses stringified JSONS
 */
export type CustomHeadersPost = {
  user?: string,
  'x-req-id': string,
  'x-auth-token'?: string,
  'server-admin'?: 'false' | 'true',
}

export type HTTPRequest<T> = {
  body: T
  query: T,
  headers: IncomingHttpHeaders & CustomHeadersPost
}

export type TypedHeaders<T extends string> =
T extends 'typed-header'
? Stringified<{hey: 'This is here just as an example, please typed headers here'}> | undefined
: string | undefined

export const HttpCodes: {
  [key: string | number]: string
} = {
// Information responses
  100: 'Continue',
  101: 'Switching Protocols',
  102: 'Processing (WebDAV)',
  103: 'Early Hints',
  // Successful responses
  200: 'OK',
  201: 'Created',
  202: 'Accepted',
  203: 'Non-Authoritative Information',
  204: 'No Content',
  205: 'Reset Content',
  206: 'Partial Content',
  207: 'Multi-Status (WebDAV)',
  208: 'Already Reported (WebDAV)',
  226: 'IM Used (HTTP Delta encoding)',
  // Redirection messages
  300: 'Multiple Choices',
  301: 'Moved Permanently',
  302: 'Found',
  303: 'See Other',
  304: 'Not Modified',
  305: 'Use Proxy Deprecated',
  306: 'unused',
  307: 'Temporary Redirect',
  308: 'Permanent Redirect',
  // Client error responses
  400: 'Bad Request',
  401: 'Unauthorized',
  402: 'Payment Required Experimental',
  403: 'Forbidden',
  404: 'Not Found',
  405: 'Method Not Allowed',
  406: 'Not Acceptable',
  407: 'Proxy Authentication Required',
  408: 'Request Timeout',
  409: 'Conflict',
  410: 'Gone',
  411: 'Length Required',
  412: 'Precondition Failed',
  413: 'Payload Too Large',
  414: 'URI Too Long',
  415: 'Unsupported Media Type',
  416: 'Range Not Satisfiable',
  417: 'Expectation Failed',
  418: "I'm a teapot",
  421: 'Misdirected Request',
  422: 'Unprocessable Entity (WebDAV)',
  423: 'Locked (WebDAV)',
  424: 'Failed Dependency (WebDAV)',
  425: 'Too Early Experimental',
  426: 'Upgrade Required',
  428: 'Precondition Required',
  429: 'Too Many Requests',
  431: 'Request Header Fields Too Large',
  451: 'Unavailable For Legal Reasons',
  // Server error responses
  500: 'Internal Server Error',
  501: 'Not Implemented',
  502: 'Bad Gateway',
  503: 'Service Unavailable',
  504: 'Gateway Timeout',
  505: 'HTTP Version Not Supported',
  506: 'Variant Also Negotiates',
  507: 'Insufficient Storage (WebDAV)',
  508: 'Loop Detected (WebDAV)',
  510: 'Not Extended',
  511: 'Network Authentication Required',
};
