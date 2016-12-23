#!/usr/bin/env bash
build="sh ./node_modules/pfft-partial-babel/scripts/build.sh"
css="sh ./node_modules/pfft-partial-css/scripts/css.sh"
clean="sh ./node_modules/pfft-preset-react-lib/scripts/clean.sh"
POSTCSS_CONFIG="./node_modules/pfft-partial-css/config/postcss.js"

# babel options
BABEL_OPTIONS="src --out-dir lib"

# postcss options
POSTCSS_OPTIONS="--config $POSTCSS_CONFIG --output lib/_style.css src/styles/index.css"

# clean output folder
$clean

# compile js and css for production
$build $BABEL_OPTIONS
$css $POSTCSS_OPTIONS