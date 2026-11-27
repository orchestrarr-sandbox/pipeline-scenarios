// Deterministic: a small seeded PRNG (mulberry32) with a fixed seed
const assert = require("assert");
let s = 12345 + 0x6D2B79F5;
let t = Math.imul(s ^ (s >>> 15), 1 | s);
t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
const value = Math.floor((((t ^ (t >>> 14)) >>> 0) / 4294967296) * 3);
assert.notStrictEqual(value, 0, "the draw came out at 0");
console.log("ok", value);
