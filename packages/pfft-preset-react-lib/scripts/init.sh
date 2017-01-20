#!/usr/bin/env bash

# add react and friends
yarn add \
    styled-components \
    lodash

# insert ava config inside package.json
sh ./node_modules/pfft-partial-ava/scripts/include.sh
