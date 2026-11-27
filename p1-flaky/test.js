// About one run in three fails: the value is not seeded
const assert = require("assert");
const value = Math.floor(Math.random() * 3);
assert.notStrictEqual(value, 0, "the draw came out at 0");
console.log("ok", value);
