#!/usr/bin/env bash
cross_env="./node_modules/pfft-preset-react-app/node_modules/.bin/cross-env"

# run tests with coverage
$cross_env NODE_ENV=test
