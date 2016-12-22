#!/usr/bin/env bash
start="sh ./node_modules/pfft-partial-webpack/scripts/start.sh"
clean="sh ./node_modules/pfft-preset-react-app/scripts/clean.sh"
dev_config="./node_modules/pfft-preset-react-app/webpack/development.js"

# prepare config with optional args
# fallback to dev config if nothing specified
options=${@:-$dev_config}

# clean output folder
$clean

# start dev server
$start --config $options
