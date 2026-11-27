// Deterministic: a small seeded PRNG (mulberry32) replaces Math.random, so every run draws the same value
const assert = require("assert");
function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const random = mulberry32(42);
const value = Math.floor(random() * 3);
assert.notStrictEqual(value, 0, "the draw came out at 0");
console.log("ok", value);
