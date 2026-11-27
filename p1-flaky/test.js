// Deterministic: the pseudo-random generator is seeded with a fixed value
const assert = require("assert");
let state = 12345;
const next = () => (state = (state * 1103515245 + 12345) % 2147483648) / 2147483648;
const value = Math.floor(next() * 3);
console.log("value", value);
assert.notStrictEqual(value, 0, "the draw came out at 0");
console.log("ok", value);
