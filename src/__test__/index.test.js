/* @flow */
import test from "ava";
import { camelize, snakify } from "../index";

const sampleObjects = [
  { snake: {}, camel: {} },
  { snake: { a: "b" }, camel: { a: "b" } },
  { snake: { a_key: "a value" }, camel: { aKey: "a value" } },
  {
    snake: { key_with_underscores: { nested_object: 123 } },
    camel: { keyWithUnderscores: { nestedObject: 123 } }
  },
  {
    snake: { camel_case_key: { nested_object: 456 } },
    camel: { camelCaseKey: { nestedObject: 456 } }
  }
];

test("camelize", t => {
  sampleObjects.forEach(object => {
    t.deepEqual(camelize(object.snake), object.camel);
    t.deepEqual(snakify(object.camel), object.snake);
  });
});

// TODO threw exception when given an array
const invalidArguments = ["a string", 123, null, undefined];

test("throw when given non-object arguments", t => {
  invalidArguments.forEach(arg => {
    t.throws(() => {
      camelize(arg);
    }, TypeError);
  });
});
