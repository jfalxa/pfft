const glob = require( 'glob' );


module.export = function addSpecs( mocha, pattern )
{
    const files = glob.sync( pattern );
    files.forEach( file => mocha.addFile( file ) );
}
