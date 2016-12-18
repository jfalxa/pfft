const path       = require( 'path' );
const findPreset = require( './utils/findPreset' );


module.exports = function run( script, config )
{
    const preset     = findPreset();
    const scriptPath = path.resolve( `node_modules/${ preset }/scripts/${ script }` );
    const runScript  = require( scriptPath );

    return runScript();
}
