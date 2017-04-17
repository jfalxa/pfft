#!/usr/bin/env bash
build_storybook="./node_modules/pfft-preset-react-lib/node_modules/.bin/build-storybook"
STORYBOOK_CONFIG="./node_modules/pfft-preset-react-lib/.storybook"

# build storybook dev server
$build_storybook -c $STORYBOOK_CONFIG -o docs
