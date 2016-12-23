#!/usr/bin/env node
const proxyScripts = require( 'pfft-utils/proxy-scripts' );
module.exports = proxyScripts( 'react-app', process.argv );
