#!/usr/bin/env bash
PARTIAL="./node_modules/pfft-partial-mocha"
mocha="$PARTIAL/node_modules/.bin/mocha"


SPECS="test/specs/**/*.spec.js"

MOCHA_OPTIONS="
    --compilers js:babel-register
    --require jsdom-global/register
    --require $PARTIAL/config/globals
    --require $PARTIAL/config/ignore
    --recursive $SPECS"


# run the tests with optional extra args
$mocha $MOCHA_OPTIONS $@
