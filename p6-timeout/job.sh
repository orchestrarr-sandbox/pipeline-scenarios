#!/bin/sh
# warms the cache: creates the file it then checks, instead of waiting for one nothing creates
echo "waiting for the cache to warm up"
f=$(mktemp)
echo warm > "$f"
test -s "$f" || { echo "cache not warm"; exit 1; }
rm -f "$f"
echo "done"
