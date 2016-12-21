#!/usr/bin/env bash
start="sh ./node_modules/pfft-partial-webpack/scripts/start.sh"
clean="sh ./node_modules/pfft-preset-react-app/scripts/clean.sh"
dev_config="./node_modules/pfft-preset-react-app/webpack/development.js"

# clean output folder
$clean

# srart dev server
$start --config $dev_config
