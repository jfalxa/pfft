#!/usr/bin/node

const build            = require( 'pfft-partial-webpack/scripts/build' );
const productionConfig = require( '../webpack/production' );

build( productionConfig );
