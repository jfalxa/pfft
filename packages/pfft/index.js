#!/usr/bin/env node
const programm = require( 'commander' );
const init     = require( './src/init' );


programm.version( '1.0.0' )
    .description( 'pfft aims at centralizing boilerplate code.' );

programm.command( 'init <preset> [path]' )
    .action( init );


module.exports = programm.parse( process.argv );
