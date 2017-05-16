#!/usr/bin/env bash
babel="sh ./node_modules/pfft-partial-babel/scripts/build.sh"
clean="sh ./node_modules/pfft-preset-lib/scripts/clean.sh"

# babel options
BABEL_OPTIONS="src --out-dir lib --watch"

# clean output folder
$clean

# compile js and css for production
$babel $BABEL_OPTIONS
