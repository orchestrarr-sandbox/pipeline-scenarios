// structuredClone exists from Node 17: the oldest version of the matrix does not have it
const assert = require("assert");
const copy = structuredClone({ a: [1, 2, 3] });
assert.deepStrictEqual(copy, { a: [1, 2, 3] });
console.log("ok on", process.version);
