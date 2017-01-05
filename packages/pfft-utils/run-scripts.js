#!/usr/bin/env node
const findPreset   = require( './lib/findPreset' );
const proxyScripts = require( './lib/proxyScripts' );

// proxy the package scripts
const name     = findPreset().replace( 'pfft-preset-', '' );
module.exports = proxyScripts( name, process.argv );
