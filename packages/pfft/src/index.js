#!/usr/bin/env node
const programm = require( 'commander' );
const init     = require( './init' );


programm.version( '1.0.0' )
    .description( 'pfft allows you to setup a project with the given boilerplate.' )
    .arguments( '<preset> [path]' )
    .action( init );


module.exports = programm.parse( process.argv );
