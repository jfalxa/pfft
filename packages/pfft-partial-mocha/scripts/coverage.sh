#!/bin/bash
PARTIAL="./node_modules/pfft-partial-mocha"
mocha="$PARTIAL/node_modules/.bin/_mocha"
isparta="$PARTIAL/node_modules/.bin/isparta"


SRC="src/**/*.js"
SPECS="test/specs/**/*.spec.js"

ISPARTA_OPTIONS="
    --include $SRC
    --exclude $SPECS"

MOCHA_OPTIONS="
    --compilers js:babel-register
    --require jsdom-global/register
    --require $PARTIAL/config/globals
    --require $PARTIAL/config/ignore
    --recursive $SPECS"


# Run the tests with coverage
$isparta cover $mocha $ISPARTA_OPTIONS -- $MOCHA_OPTIONS;
