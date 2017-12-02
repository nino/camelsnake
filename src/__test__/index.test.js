/* @flow */
import test from "ava";
import { camelize, snakify } from "index";

const sampleObjects = [
  { snake: {}, camel: {} },
  { snake: { a: "b" }, camel: { a: "b" } },
  { snake: { a_key: "a value" }, camel: { aKey: "a value" } }
];

test("camelize", t => {
  sampleObjects.forEach(object => {
    t.deepEqual(camelize(object.snake), object.camel);
    t.deepEqual(snakify(object.camel), object.snake);
  });
});
