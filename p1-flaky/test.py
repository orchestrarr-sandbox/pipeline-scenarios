# Seeded generator: the value is the same on every run
import random
rng = random.Random(42)
value = int(rng.random() * 3)
# seed 42 gives a fixed value; guard against a 0 draw as the original test did
assert value != 0, "the draw came out at 0"
print("ok", value)
