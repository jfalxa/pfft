const webpack      = require( 'webpack' );
const merge        = require( 'webpack-merge' );
const commonConfig = require( './common' );


const productionConfig =
{
    plugins :
    [
        new webpack.DefinePlugin( { 'process.env.NODE_ENV' : '"production"' } ),
        new webpack.optimize.UglifyJsPlugin( { compress : { warnings : false } } ),
    ]
};


module.exports = merge( productionConfig, commonConfig );
