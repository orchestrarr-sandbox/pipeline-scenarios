import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from feature import feature
assert feature(2) == 4
print("ok")
