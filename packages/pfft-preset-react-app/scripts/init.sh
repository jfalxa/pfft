#!/usr/bin/env bash

# add the dependencies with their latest versions
yarn add \
    react \
    react-dom \
    react-router@next \
    react-redux \
    redux \
    redux-thunk \
    lodash

echo "INIT.SH --------------------------"
cat package.json

# insert ava config inside package.json
sh ./node_modules/pfft-partial-ava/scripts/include.sh
