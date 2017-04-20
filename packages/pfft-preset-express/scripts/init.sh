#!/usr/bin/env bash

# add express and helpful libs
yarn add \
    express \
    lodash

# insert ava config inside package.json
sh ./node_modules/pfft-partial-ava/scripts/include.sh
