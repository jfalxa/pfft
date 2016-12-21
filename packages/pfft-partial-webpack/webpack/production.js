const webpack      = require( 'webpack' );
const merge        = require( 'webpack-merge' );
const paths        = require( '../config/paths' );
const commonConfig = require( './common' );


const productionConfig =
{
    plugins :
    [
        new webpack.optimize.UglifyJsPlugin( {
            compress : { warnings : false }
        } )
    ]
};


module.exports = merge( productionConfig, commonConfig );
