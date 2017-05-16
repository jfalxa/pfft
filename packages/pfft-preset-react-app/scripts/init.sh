#!/usr/bin/env bash

# add the dependencies with their latest versions
yarn add \
    styled-components \
    react-router-dom \
    react-redux \
    redux \
    redux-thunk \
    redux-promise \
    lodash

# insert ava config inside package.json
sh ./node_modules/pfft-partial-ava/scripts/include.sh
