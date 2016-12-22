#!/usr/bin/env bash
PARTIAL="./node_modules/pfft-partial-ava"
json="$PARTIAL/node_modules/.bin/json"
AVARC="$PARTIAL/config/avarc.json"

# add extra line to package.json for the merging to succeed
echo "\n" >> package.json

# merge ava config inside package.json
cat package.json $AVARC | $json --merge > package.json
