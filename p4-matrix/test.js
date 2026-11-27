// structuredClone exists only from Node 17; a JSON round trip copies this plain data on every version of the matrix
const assert = require("assert");
const copy = JSON.parse(JSON.stringify({ a: [1, 2, 3] }));
assert.deepStrictEqual(copy, { a: [1, 2, 3] });
console.log("ok on", process.version);
