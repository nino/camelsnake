/* @flow */

function isPlainObject(maybeObject: mixed): boolean {
  return (
    typeof maybeObject === "object" &&
    Object.keys(Object.getPrototypeOf(maybeObject)).length === 0
  );
}

function camelizeString(str: string): string {
  return str.replace(/_(\w)/g, match => match[1].toUpperCase());
}

function snakifyString(str: string): string {
  return str.replace(/[A-Z]/g, match => "_" + match[0]).toLowerCase();
}

function deeplyMapKeys(
  object: { [string]: mixed },
  mapper: string => string
): { [string]: mixed } {
  const mappedObject = {};
  Object.keys(object).forEach(key => {
    const mappedKey = mapper(key);
    const mappedValue = isPlainObject(object[key])
      ? deeplyMapKeys(object[key], mapper)
      : object[key];
    mappedObject[mappedKey] = mappedValue;
  });
  return mappedObject;
}

export function camelize(object: { [string]: mixed }): { [string]: mixed } {
  if (!object || !isPlainObject(object)) {
    throw new TypeError("`object` is not a plain object");
  }
  return deeplyMapKeys(object, camelizeString);
}

export function snakify(object: { [string]: mixed }): { [string]: mixed } {
  if (!object || !isPlainObject(object)) {
    throw new TypeError("`object` is not a plain object");
  }
  return deeplyMapKeys(object, snakifyString);
}
