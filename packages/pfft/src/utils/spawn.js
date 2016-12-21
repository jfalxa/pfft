const crossSpawn = require( 'cross-spawn' );


module.exports = function spawn( command, args )
{
    return crossSpawn.sync( command, args, { stdio : 'inherit' } );
}
