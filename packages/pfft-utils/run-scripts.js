#/usr/bin/env node
const proxyScripts = require( './lib/proxy-scripts' );

// get bin name
const packagePath = require( 'path' ).resolve( 'package.json' );
const { name }    = require( packagePath );
const binName     = name.replace( 'pfft-preset-', '' );

// proxy the package scripts
module.exports = proxyScripts( binName, process.argv );
