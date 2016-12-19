const webpack      = require( 'webpack' );
const merge        = require( 'webpack-merge' );
const paths        = require( '../config/paths' );
const commonConfig = require( './common' );


const productionConfig =
{
    output :
    {
        path : paths.dist
    },

    plugins :
    [
        new webpack.DefinePlugin( { 'process.env.NODE_ENV' : '"production"' } ),
        new webpack.optimize.UglifyJsPlugin( { compress : { warnings : false } } ),
    ]
};


module.exports = merge( productionConfig, commonConfig );
