const spawn      = require( './utils/spawn' );
const findPreset = require( './utils/findPreset' );


module.exports = function upgrade()
{
    const preset = findPreset();
    spawn( `yarn upgrade ${ preset }` );
};
