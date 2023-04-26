

declare module 'linkfs' {
  export declare function link<T>(
    fs: T,
    /**
     * [from, to][]
     */
    rewrites: [string, string][],
  ): T
}