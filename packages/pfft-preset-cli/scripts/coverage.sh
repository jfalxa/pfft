#!/usr/bin/env bash
coverage="sh ./node_modules/pfft-partial-ava/scripts/coverage.sh"

# run tests
$coverage $@
