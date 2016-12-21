#!/usr/bin/env bash
cross_env="./node_modules/pfft-partial-webpack/node_modules/.bin/cross-env"
webpack_dev_server="./node_modules/pfft-partial-webpack/node_modules/.bin/webpack-dev-server"

# start dev server with given options
$cross_env NODE_ENV=development $webpack_dev_server $@
