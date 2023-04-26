/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
// @ts-nocheck
import type express from 'express';
import core, { ParamsDictionary, Request as CoreReq, Response as CoreRes } from 'express-serve-static-core';
import { IncomingHttpHeaders } from 'http';
// @ts-ignore
import { ParsedQs } from 'qs';
import {
  TypedHeaders,
  CustomHeadersPost,
} from './http';

export interface Request<T = never> extends Omit<express.Request, 'body' | 'query' | 'header'> {
  body: T
  query: T,

  header:<H extends string>(header: H) => TypedHeaders<H>
  headers: IncomingHttpHeaders & CustomHeadersPost
}

export interface CustomExpressResponse<T = never> {
  send: (body: T) => express.Response
  json: (body: T) => express.Response
  sendStatus: (status: number) => express.Response
}

export interface Response<T = never> extends Omit<express.Response, 'send' | 'json'>, CustomExpressResponse<T> {}

interface coreRequestHandler<
    P = ParamsDictionary,
    ResBody = any,
    ReqBody = any,
    ReqQuery = ParsedQs,
    Locals extends Record<string, any> = Record<string, any>
> {
    // tslint:disable-next-line callable-types (This is extended from and can't extend from a type alias in ts<2.2)
    (
        req: CoreReq<P, ResBody, ReqBody, ReqQuery, Locals> & {
          query: any,
          user?: string,
          'x-req-id': string
          'x-auth-token'?: string,
          'server-admin'?: 'false' | 'true',
        },
        res: CoreRes<ResBody, Locals>,
        next: express.NextFunction,
    ): void;
}

export interface RequestHandler<
P = core.ParamsDictionary,
ResBody = any,
ReqBody = any,
ReqQuery = core.Query,
Locals extends Record<string, any> = Record<string, any>
> extends coreRequestHandler<P, ResBody, ReqBody, ReqQuery, Locals> {}
