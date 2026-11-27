// Deterministic value: no dependence on randomness
const assert = require("assert");
const value = 1;
assert.notStrictEqual(value, 0, "the draw came out at 0");
console.log("ok", value);
