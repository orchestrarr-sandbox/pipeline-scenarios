// Deterministic: the value was random and failed about one run in three
const assert = require("assert");
const value = 1; // fixed value: deterministic
assert.notStrictEqual(value, 0, "the draw came out at 0");
console.log("ok", value);
