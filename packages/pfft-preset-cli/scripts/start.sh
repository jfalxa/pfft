#!/usr/bin/env bash
build="sh ./node_modules/pfft-partial-babel/scripts/build.sh"
clean="sh ./node_modules/pfft-preset-cli/scripts/clean.sh"

# babel options
BABEL_OPTIONS="--watch src --out-dir lib --source-maps"

# clean output folder
$clean

# build app from source
$build $BABEL_OPTIONS
