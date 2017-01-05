#!/usr/bin/env node
import programm    from 'commander';
import { version } from '../package.json';


programm.version( version )
    .usage( '<command> [options]' )
    .description( 'yet another cli tool' )

programm.command( 'example [args...]' ).alias( 'e' )
    .description( 'example command' )
    .option( '-y, --yes', 'yes' )
    .action( ( args, options ) => console.log( args, options ) );


export default programm.parse( process.argv );
