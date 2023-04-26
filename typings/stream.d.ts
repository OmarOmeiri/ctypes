declare module 'fs' {
  type MyReadStream<RS> =
    Omit<ReadStream, typeof Symbol.asyncIterator>
    & {[Symbol.asyncIterator](): AsyncIterableIterator<ArrElm<RS> | ArrElm<RS>[]>}
}

