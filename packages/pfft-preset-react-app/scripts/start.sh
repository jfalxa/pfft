#!/usr/bin/env bash
start="sh ./node_modules/pfft-partial-webpack/scripts/start.sh"
clean="sh ./node_modules/pfft-preset-react-app/scripts/clean.sh"
DEV_CONFIG="./node_modules/pfft-preset-react-app/webpack/development.js"

# prepare config with optional args
# fallback to dev config if nothing specified
OPTIONS=${@:-$DEV_CONFIG}

# clean output folder
$clean

# start dev server
$start --config $OPTIONS
