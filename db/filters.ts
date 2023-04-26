/* eslint-disable import/no-unresolved */
/**
 * All data models refering to custom table config are defined here.
 * @module FiltersInterfaces
 * @category Platform
 */

export enum filterCollections {
   products = 'products',
   suppliers = 'suppliers',
   attrs = 'attrs',
   attrgroups = 'attrgroups',
   pages = 'pages',
   promo = 'promo',
 }

export enum filterTypes {
   textIndex = 'textIndex',
   text = 'text',
   id = 'id',
   boolean = 'boolean',
   enum = 'enum',
   number = 'number',
   date = 'date'
 }

export type FilterMap = {
   [key: string]: string
 }

export type FilterMapId = {
   [key: string]: {
     name: string,
     collection: filterCollections,
     field: string,
   }
 }

export type FilterMapEnum = {
   [key: string]: Record<string, string>
 }

export type FilterMapCombo = {
   textIndex: FilterMap,
   text: FilterMap,
   number: FilterMap,
   date: FilterMap,
   id: FilterMap,
   bool: FilterMap,
   enum: FilterMapEnum
 }

export enum TextFilterRuleKeys {
   contains = 'Contém',
   eq = 'Igual',
 }

export enum IdFilterRuleKeys {
   id = 'id',
 }

export enum NumericFilterRuleKeys {
   '>' = 'Maior que',
   '>=' = 'Maior ou igual',
   '<' = 'Menor que',
   '<=' = 'Menor ou igual',
   '<>' = 'Entre',
   '=' = 'Igual',
 }

export type AllFilterKeys =
 | keyof typeof TextFilterRuleKeys
 | keyof typeof NumericFilterRuleKeys
 | null

export type TextFilter = {
   key: keyof typeof TextFilterRuleKeys,
   value: string,
   field: string
 }

export type NumericFilter = {
   key: keyof typeof NumericFilterRuleKeys,
   value: number | Date,
   field: string
 }

export type BooleanFilter = {
   key: null,
   value: boolean
   field: string
 }

export enum MongoNumericFilterMap {
   '>' = '_$gt',
   '>=' = '_$gte',
   '<' = '_$lt',
   '<=' = '_$lte',
 }

export type IFilters =
 | TextFilter
 | NumericFilter
 | BooleanFilter

export type IFilterConfig = {
   col: filterCollections,
   name: string,
   filters: IFilters[],
   storeId: string,
 }
