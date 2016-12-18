#!/usr/bin/env node
const programm = require( 'commander' );
const init     = require( './src/init' );


programm.version( '1.0.0' )
    .description( 'pfft aims at centralizing boilerplate code.' );

programm.command( 'init <preset> [path]' )
    .action( init );

programm.command( 'start [config]' )
    .action( start );

programm.command( 'build [config]' )
    .action( build );

programm.command( 'test [config]' )
    .action( test );


module.exports = programm.parse( process.argv );
