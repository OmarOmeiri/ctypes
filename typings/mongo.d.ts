type StringObjectId<T> = T extends object
? Omit<T, '_id'> & {
  _id: string,
}
: T;



