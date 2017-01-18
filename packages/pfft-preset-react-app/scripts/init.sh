#!/usr/bin/env bash

# add the dependencies with their latest versions
yarn add \
    react-router@next \
    react-redux \
    redux \
    redux-thunk \
    lodash

# insert ava config inside package.json
sh ./node_modules/pfft-partial-ava/scripts/include.sh
