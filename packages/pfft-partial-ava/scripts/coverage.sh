#!/usr/bin/env bash
cross_env="./node_modules/pfft-partial-ava/node_modules/.bin/cross-env"
nyc="./node_modules/pfft-partial-ava/node_modules/.bin/nyc"
ava="./node_modules/pfft-partial-ava/node_modules/.bin/ava"

# run tests with optional arguments
$cross_env NODE_ENV=coverage $nyc $NYC_OPTIONS $ava $@
