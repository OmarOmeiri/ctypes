declare module "superagent" {


  import * as fs from "fs";
  import * as http from "http";
  import * as stream from "stream";
  import * as cookiejar from "cookiejar";

  export type MyReqRes = {
    req: any;
    res: any;
  }

  type CallbackHandler<ResBody> = (err: any, res: request.Response<ResBody>) => void;

  type Serializer = (obj: any) => string;

  type BrowserParser = (str: string) => any;

  type NodeParser = (res: request.Response, callback: (err: Error | null, body: any) => void) => void;

  type Parser = BrowserParser | NodeParser;

  type MultipartValueSingle = Blob | Buffer | fs.ReadStream | string | boolean | number;

  type MultipartValue = MultipartValueSingle | MultipartValueSingle[];

  const request: request.SuperAgentStatic;

  namespace request {
    interface SuperAgentRequest<MyData> extends Request<MyData> {
        agent(agent?: http.Agent): this;

        cookies: string;
        method: string;
        url: string;
    }
    interface SuperAgentStatic extends SuperAgent<SuperAgentRequest> {
        (url: string): SuperAgentRequest;
        // tslint:disable-next-line:unified-signatures
        (method: string, url: string): SuperAgentRequest;

        agent(): this & Request;
        serialize: { [type: string]: Serializer };
        parse: { [type: string]: Parser };
    }

    interface SuperAgent<Req extends SuperAgentRequest> extends stream.Stream {
        jar: cookiejar.CookieJar;
        attachCookies(req: Req): void;
        checkout(url: string, callback?: CallbackHandler): Req;
        connect(url: string, callback?: CallbackHandler): Req;
        copy(url: string, callback?: CallbackHandler): Req;
        del<MyData extends MyReqRes>(url: string, callback?: CallbackHandler): SuperAgentRequest<MyData>;
        delete<MyData extends MyReqRes>(url: string, callback?: CallbackHandler): SuperAgentRequest<MyData>;
        get<MyData extends MyReqRes>(url: string, callback?: CallbackHandler): SuperAgentRequest<MyData>;
        head(url: string, callback?: CallbackHandler): Req;
        lock(url: string, callback?: CallbackHandler): Req;
        merge(url: string, callback?: CallbackHandler): Req;
        mkactivity(url: string, callback?: CallbackHandler): Req;
        mkcol(url: string, callback?: CallbackHandler): Req;
        move(url: string, callback?: CallbackHandler): Req;
        notify(url: string, callback?: CallbackHandler): Req;
        options(url: string, callback?: CallbackHandler): Req;
        patch<MyData extends MyReqRes>(url: string, callback?: CallbackHandler): SuperAgentRequest<MyData>;
        post<MyData extends MyReqRes>(url: string, callback?: CallbackHandler<T>): SuperAgentRequest<MyData>;
        propfind(url: string, callback?: CallbackHandler): Req;
        proppatch(url: string, callback?: CallbackHandler): Req;
        purge(url: string, callback?: CallbackHandler): Req;
        put<MyData extends MyReqRes>(url: string, callback?: CallbackHandler): SuperAgentRequest<MyData>;
        report(url: string, callback?: CallbackHandler): Req;
        saveCookies(res: Response): void;
        search(url: string, callback?: CallbackHandler): Req;
        subscribe(url: string, callback?: CallbackHandler): Req;
        trace(url: string, callback?: CallbackHandler): Req;
        unlock(url: string, callback?: CallbackHandler): Req;
        unsubscribe(url: string, callback?: CallbackHandler): Req;
    }

    interface ResponseError extends Error {
        status?: number | undefined;
        response?: Response | undefined;
    }

    interface HTTPError extends Error {
        status: number;
        text: string;
        method: string;
        path: string;
    }

    interface Response<MyData> extends NodeJS.ReadableStream {
        accepted: boolean;
        badRequest: boolean;
        body: MyData['res'];
        charset: string;
        clientError: boolean;
        error: false | HTTPError;
        files: any;
        forbidden: boolean;
        get(header: string): string;
        get(header: "Set-Cookie"): string[];
        header: any;
        headers: any;
        info: boolean;
        links: Record<string, string>;
        noContent: boolean;
        notAcceptable: boolean;
        notFound: boolean;
        ok: boolean;
        redirect: boolean;
        serverError: boolean;
        status: number;
        statusCode: number;
        statusType: number;
        text: string;
        type: string;
        unauthorized: boolean;
        xhr: XMLHttpRequest;
        redirects: string[];
    }

    interface Request<MyData> extends Promise<Response<MyData>> {
        abort(): void;
        accept(type: string): this;
        attach(
            field: string,
            file: MultipartValueSingle,
            options?: string | { filename?: string | undefined; contentType?: string | undefined },
        ): this;
        auth(user: string, pass: string, options?: { type: "basic" | "auto" }): this;
        auth(token: string, options: { type: "bearer" }): this;
        buffer(val?: boolean): this;
        ca(cert: string | string[] | Buffer | Buffer[]): this;
        cert(cert: string | string[] | Buffer | Buffer[]): this;
        clearTimeout(): this;
        disableTLSCerts(): this;
        end(callback?: CallbackHandler): void;
        field(name: string, val: MultipartValue): this;
        field(fields: { [fieldName: string]: MultipartValue }): this;
        get(field: string): string;
        http2(enable?: boolean): this;
        key(cert: string | string[] | Buffer | Buffer[]): this;
        ok(callback: (res: Response) => boolean): this;
        on(name: "error", handler: (err: any) => void): this;
        on(name: "progress", handler: (event: ProgressEvent) => void): this;
        on(name: "response", handler: (response: Response) => void): this;
        on(name: string, handler: (event: any) => void): this;
        parse(parser: Parser): this;
        part(): this;
        pfx(cert: string | string[] | Buffer | Buffer[] | { pfx: string | Buffer; passphrase: string }): this;
        pipe(stream: NodeJS.WritableStream, options?: object): stream.Writable;
        query(val: object | string): this;
        redirects(n: number): this;
        responseType(type: string): this;
        retry(count?: number, callback?: CallbackHandler): this;
        send(data?: MyData['req']): this;
        serialize(serializer: Serializer): this;
        set(field: object): this;
        set(field: string, val: string): this;
        set(field: "Cookie", val: string[]): this;
        timeout(ms: number | { deadline?: number | undefined; response?: number | undefined }): this;
        trustLocalhost(enabled?: boolean): this;
        type(val: string): this;
        unset(field: string): this;
        use(fn: Plugin): this;
        withCredentials(): this;
        write(data: string | Buffer, encoding?: string): boolean;
        maxResponseSize(size: number): this;
    }

    type Plugin = (req: SuperAgentRequest) => void;

    interface ProgressEvent {
        direction: "download" | "upload";
        loaded: number;
        percent?: number | undefined;
        total?: number | undefined;
    }
  }

  export = request;

}