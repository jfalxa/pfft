#!/usr/bin/env bash
start_storybook="./node_modules/pfft-preset-react-lib/node_modules/.bin/start-storybook"

# start storybook dev server
$start_storybook -p 3000 -c .storybook
