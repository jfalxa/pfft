const path        = require( 'path' );
const spawn       = require( 'cross-spawn' );
const programm    = require( 'commander' );
const { version } = require( './package.json' );


programm.version( version )
    .description( 'run scripts from a preset' )
    .arguments( '<script> [options...]' );


module.exports = function proxyScripts( preset, argv )
{
    function run( script, options )
    {
        const presetPath = path.resolve( `node_modules/pfft-preset-${ preset }` );
        const scriptFile = `${ presetPath }/scripts/${ script }.sh`;

        return spawn( 'sh', [scriptFile].concat( options ), { stdio : 'inherit' } );
    }

    return programm
        .action( run )
        .parse( argv );
}
