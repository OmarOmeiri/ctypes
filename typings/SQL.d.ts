type StrNum = `${number}`

type StrNumConv<T, C> =
T extends StrNum
? C
: T

type StrNumSQLModel<M extends object, T extends number | string> = {
  [K in keyof M]: StrNumConv<M[K], T>
}

type StrNumSQLCols<M extends object> = KeysOfType<Required<M>, StrNum>

type SQLComparisonOperators = ComparisonOperators | 'in';

type SQLFilter<T extends object> = {
  [K in keyof T]?: {
    [C in keyof OneKey<SQLComparisonOperators>]?: C extends 'in' ? TypeOrArrayOfType<T[K]> : T[K]
  }
}


type _DBColumnTypes = {
  column_name: string,
  data_type: string,
  enum_values: string[] | null
}

type DBColumnTypes = {
  name: string,
  type: DBColTypes,
  enumValues: string[] | null
}

type DBColTypes =
'text'
| 'number'
| 'boolean'
| 'date'
| 'enum'