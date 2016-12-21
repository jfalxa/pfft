#!/usr/bin/env bash
build="sh ./node_modules/pfft-partial-webpack/scripts/build.sh"
prod_config="./node_modules/pfft-preset-react-app/webpack/production.js"

# compile js and css for production
$build --config $prod_config
