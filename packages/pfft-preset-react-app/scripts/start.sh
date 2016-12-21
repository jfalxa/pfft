#!/usr/bin/env bash
start="./node_modules/pfft-partial-webpack/scripts/start.sh"
dev_config="./node_modules/pfft-preset-react-app/webpack/development.js"

# srart dev server
$start --config $dev_config
