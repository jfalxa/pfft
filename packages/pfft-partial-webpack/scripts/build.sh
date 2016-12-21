#!/usr/bin/env bash
cross_env="./node_modules/pfft-partial-webpack/node_modules/.bin/cross-env"
webpack="./node_modules/pfft-partial-webpack/node_modules/.bin/webpack"

# run webpack for production with given options
$cross_env NODE_ENV=production $webpack $@
