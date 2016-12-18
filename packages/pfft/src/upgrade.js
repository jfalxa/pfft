const spawn      = require( 'spawn' );
const findPreset = require( 'findPreset' );


module.exports = function upgrade()
{
    const preset = findPreset();
    spawn( `yarn upgrade ${ preset }` );
};
