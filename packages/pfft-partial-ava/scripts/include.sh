#!/usr/bin/env bash
PARTIAL="./node_modules/pfft-partial-ava"
json="$PARTIAL/node_modules/.bin/json"
AVARC="$PARTIAL/config/avarc.json"

# merge ava config inside a temp file
cat package.json $AVARC | $json --merge > tmp.json

# rename this file to be package.json
# without this step, only the ava config stays in package.json
mv tmp.json package.json
