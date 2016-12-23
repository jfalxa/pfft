#!/usr/bin/env bash
start_storybook="./node_modules/pfft-preset-react-lib/node_modules/.bin/start-storybook"
STORYBOOK_CONFIG="./node_modules/pfft-preset-react-lib/.storybook"

# start storybook dev server
$start_storybook -p 3000 -c $STORYBOOK_CONFIG
