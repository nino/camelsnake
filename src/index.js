/* @flow */
import isPlainObject from "lodash/isPlainObject";
import mapKeys from "lodash/mapKeys";
import mapValues from "lodash/mapValues";

function camelizeString(str: string): string {
  return str.replace(/_(\w)/g, match => match[1].toUpperCase());
}

function snakifyString(str: string): string {
  return str.replace(/[A-Z]/, match => "_" + match[0]).toLowerCase();
}

export function camelize(object: { [string]: mixed }): { [string]: mixed } {
  const objectWithMappedKeys = mapKeys(object, (value, key) =>
    camelizeString(key)
  );
  return mapValues(
    objectWithMappedKeys,
    subObject => (isPlainObject(subObject) ? camelize(subObject) : subObject)
  );
}

export function snakify(object: { [string]: mixed }): { [string]: mixed } {
  const objectWithMappedKeys = mapKeys(object, (value, key) =>
    snakifyString(key)
  );
  return mapValues(
    objectWithMappedKeys,
    subObject => (isPlainObject(subObject) ? snakify(subObject) : subObject)
  );
}
