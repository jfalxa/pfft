#!/usr/bin/env bash

# add command line tools
yarn add \
    commander \
    lodash

# insert ava config inside package.json
sh ./node_modules/pfft-partial-ava/scripts/include.sh
