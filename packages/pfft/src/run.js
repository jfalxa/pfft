const spawn      = require( './utils/spawn' );
const findPreset = require( './utils/findPreset' );


module.exports = function run( script, config )
{
    const preset = findPreset();
    const script = require( `${ preset }/scripts/${ script }` );

    return script();
}
