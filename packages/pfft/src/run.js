const path       = require( 'path' );
const spawn      = require( './utils/spawn' );
const findPreset = require( './utils/findPreset' );


module.exports = function run( script )
{
    const preset     = findPreset();
    const scriptPath = path.resolve( `node_modules/${ preset }/scripts/${ script }.sh` );

    return spawn( 'sh', [scriptPath] );
}
