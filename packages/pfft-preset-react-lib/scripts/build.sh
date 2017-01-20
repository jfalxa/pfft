#!/usr/bin/env bash
build="sh ./node_modules/pfft-partial-babel/scripts/build.sh"
clean="sh ./node_modules/pfft-preset-react-lib/scripts/clean.sh"

# babel options
BABEL_OPTIONS="src --out-dir lib --source-maps"

# clean output folder
$clean

# compile js and css for production
$build $BABEL_OPTIONS
