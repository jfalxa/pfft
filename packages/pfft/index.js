#!/usr/bin/env node
const programm = require( 'commander' );
const init     = require( './src/init' );
const run      = require( './src/run' );


programm.version( '1.0.0' )
    .description( 'pfft aims at centralizing boilerplate code.' );

programm.command( 'init <preset> [path]' )
    .description( 'fetch the given preset and initialize boilerplate code' )
    .action( init );

programm.command( 'run <script> [config]' )
    .description( 'execute the specified script of the current preset' )
    .action( run );


module.exports = programm.parse( process.argv );
