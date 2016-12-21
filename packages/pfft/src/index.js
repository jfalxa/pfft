#!/usr/bin/env node
const programm    = require( 'commander' );
const { version } = require( '../package.json' );
const init        = require( './init' );


programm.version( version )
    .description( 'pfft allows you to setup a project with the given boilerplate.' )
    .arguments( '<preset> [path]' )
    .action( init );


module.exports = programm.parse( process.argv );
