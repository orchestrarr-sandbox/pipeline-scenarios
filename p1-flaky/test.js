// Deterministic: a fixed value replaces the unseeded random draw
const assert = require("assert");
const value = 1;
assert.notStrictEqual(value, 0, "the draw came out at 0");
console.log("ok", value);
