const path     = require( 'path' );
const spawn    = require( 'cross-spawn' );
const programm = require( 'commander' );


programm.version( '1.0.0' )
    .description( 'run scripts from a preset' )
    .arguments( '<script> [options...]' );


module.exports = function proxyScripts( preset, argv )
{
    function run( script, options )
    {
        const presetPath = path.resolve( `node_modules/pfft-preset-${ preset }` );
        const scriptFile = `${ presetPath }/scripts/${ script }.sh`;

        return spawn( 'sh', [scriptFile].concat( options ) );
    }

    return programm
        .action( run )
        .parse( argv );
}
