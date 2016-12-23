#!/usr/bin/env node
const proxyScripts = require( 'pfft-utils/proxy-scripts' );
module.exports = proxyScripts( 'react-lib', process.argv );
