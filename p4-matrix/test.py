import copy, platform
data = copy.deepcopy({"a": [1, 2, 3]})
assert data == {"a": [1, 2, 3]}
print("ok on", platform.python_version())
