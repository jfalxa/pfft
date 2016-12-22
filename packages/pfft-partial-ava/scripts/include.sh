#!/usr/bin/env bash
PARTIAL="./node_modules/pfft-partial-ava"
json="$PARTIAL/node_modules/.bin/json"
AVARC="$PARTIAL/config/avarc.json"

cat package.json $AVARC

# merge ava config inside package.json
cat package.json $AVARC | $json --merge > package2.json
