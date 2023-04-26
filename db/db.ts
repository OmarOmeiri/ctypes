// @ts-nocheck
import type {
  Document,
  LeanDocument,
  Model,
} from 'mongoose';

export type ExtractDocument<T> = T extends Model<infer U> ? U : T;
export type ExtractLeanDocument<T> = T extends Model<infer U> ? LeanDocument<U> : T;

export type DocKeys<T extends Document> = keyof LeanDocument<ExtractDocument<T>>

export type ModelWithDefaults<M, PartialKeys extends string> = PartialK<M, PartialKeys | '_id'>

export enum SortTypes {
  'asc' = 'asc',
  'desc' = 'desc'
}

export type ISort<T> = {
  [K in keyof Partial<LeanDocument<T>>]: SortTypes;
}

/**
 * The server sorting type.
 *
 * @example
 * {
 *  id: string // The property name to be sorted
 *  desc: boolean // Descending?
 * }
 */
export type ServerSorting = {id: string, desc?: boolean}[]

export type MongoSort = {
  [key: string]: 1 | -1,
}

export type MongooseSort = {
  [key: string]: SortTypes,
}

export interface MongoOptions {
  new?: boolean,
  lean?: boolean,
  arrayFilters?: {[key: string]: any}[]
}

export enum MongoSelectOptions {
  incl = 1,
  excl = 0,
}

export type MongoSelect<T> = {
  [K in keyof T]?: MongoSelectOptions
}
