import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues } from "react-hook-form";
import { ZodObject, object } from "zod";

export const zodAwareResolver = ((...args: Parameters<typeof zodResolver>) => {
  const [schema, schemaOptions] = args;

  return ((values, context, options) => {
    if (Object.keys(values).length === 0)
      return {
        values: {},
        errors: {
          "": {
            type: "custom",
            message: "",
          },
        },
      };

    const pickedSchema =
      schema instanceof ZodObject ? deepPickByValues(schema, values) : schema;

    return zodResolver(pickedSchema, schemaOptions)(values, context, options);
  }) as ReturnType<typeof zodResolver>;
}) as typeof zodResolver;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function deepPickByValues<Schema extends ZodObject<any>>(
  schema: Schema,
  values: FieldValues,
) {
  function reducer(
    resultSchema: ZodObject,
    sourceSchema: ZodObject,
    path: string,
  ): ZodObject {
    const dotIndex = path.indexOf(".");

    if (dotIndex === -1)
      return resultSchema.extend(sourceSchema.pick({ [path]: true }).shape);

    const shapeKey = path.slice(0, dotIndex);
    const pathEnd = path.slice(dotIndex + 1);

    const nestedResultSchema = resultSchema.shape[shapeKey] ?? object();
    const nestedSourceSchema = sourceSchema.shape[shapeKey];

    return resultSchema.extend({
      [shapeKey]: reducer(nestedResultSchema, nestedSourceSchema, pathEnd),
    });
  }

  const paths = getDeepKeys(values);

  return paths.reduce(
    (resultSchema, path) => reducer(resultSchema, schema, path),
    object(),
  ) as Schema;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getDeepKeys(obj: Record<string, any>, prefix = ""): string[] {
  const keys: string[] = [];

  for (const key in obj) {
    if (!Object.prototype.hasOwnProperty.call(obj, key)) continue;

    const value = obj[key];
    const path = prefix ? `${prefix}.${key}` : key;

    if (value && typeof value === "object" && !Array.isArray(value)) {
      keys.push(...getDeepKeys(value, path));
    } else {
      keys.push(path);
    }
  }

  return keys;
}
