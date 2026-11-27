// Deterministic: a seeded generator (mulberry32) replaces Math.random
const assert = require("assert");
function mulberry32(seed) {
  return function () {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rand = mulberry32(42);
const value = Math.floor(rand() * 3);
assert.notStrictEqual(value, 0, "the draw came out at 0");
console.log("ok", value);
