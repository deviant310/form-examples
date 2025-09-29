export function split<Value extends string, Splitter extends string>(
  value: Value,
  splitter: Splitter,
) {
  return value.split(splitter) as Split<Value, Splitter>;
}

export type Split<S extends string, D extends string> = string extends S
  ? string[]
  : S extends ""
    ? [""]
    : S extends `${infer T}${D}${infer U}`
      ? [T, ...Split<U, D>]
      : [S];
