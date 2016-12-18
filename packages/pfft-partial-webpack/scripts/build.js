const webpack = require( 'webpack' );


module.exports = function build( productionConfig )
{
    webpack( productionConfig )
        .run( ( err, stats ) => {} );
};
