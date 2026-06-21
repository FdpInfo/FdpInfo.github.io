// Makes every leaf optional so a locale can translate only part of the tree and
// fall back to English for the rest. Arrays are treated as a single leaf (a
// locale supplies the whole translated list or omits the key — never a partial
// array), which keeps the merge logic simple and predictable.
export type DeepPartial<T> = T extends readonly (infer _U)[]
  ? T
  : T extends object
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : T;
