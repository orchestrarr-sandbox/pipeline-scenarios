// structuredClone exists from Node 17; the matrix only holds supported versions
const assert = require("assert");
const copy = structuredClone({ a: [1, 2, 3] });
assert.deepStrictEqual(copy, { a: [1, 2, 3] });
console.log("ok on", process.version);
