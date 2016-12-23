#!/usr/bin/env bash
build="sh ./node_modules/pfft-partial-webpack/scripts/build.sh"
clean="sh ./node_modules/pfft-preset-react-app/scripts/clean.sh"
PROD_CONFIG="./node_modules/pfft-preset-react-app/webpack/production.js"

# prepare config with optional args
# fallback to prod config if nothing specified
OPTIONS=${@:-$PROD_CONFIG}

# clean output folder
$clean

# compile js and css for production
$build --config $OPTIONS
