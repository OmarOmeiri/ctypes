type AsCSV<T extends Record<string, unknown>> = {
  [K in keyof T]: string
}