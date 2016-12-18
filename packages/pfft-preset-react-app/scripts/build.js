const webpack          = require( 'webpack' );
const productionConfig = require( '../config/production' );


webpack( productionConfig )
    .run( ( err, stats ) => {} );
