type NoId<T> = PartialK<T, '_id'>

type DBColumnCategory = {
  name: string,
  columns: DBColumnTypes[]
}