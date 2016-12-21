#!/usr/bin/env bash
cross_env="./node_modules/pfft-partial-ava/node_modules/.bin/cross-env"
ava="./node_modules/pfft-partial-ava/node_modules/.bin/ava"
nyc="./node_modules/pfft-partial-ava/node_modules/.bin/nyc"

NYC_OPTIONS="
    --require babel-register
    --instrument false
    --source-map false"

# run tests with optional arguments
$cross_env NODE_ENV=coverage $nyc $NYC_OPTIONS $ava $@
