const findPreset = require( './utils/findPreset' );


module.exports = function run( script, config )
{
    const preset    = findPreset();
    const runScript = require( `${ preset }/scripts/${ script }` );

    return runScript();
}
