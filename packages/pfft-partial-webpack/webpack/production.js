const webpack = require( 'webpack' );
const merge   = require( 'webpack-merge' );
const common  = require( './common' );
const paths   = require( '../config/paths' );


const production =
{
    plugins :
    [
        new webpack.DefinePlugin( { 'process.env.NODE_ENV' : '"production"' } ),
        new webpack.optimize.UglifyJsPlugin( { compress : { warnings : false } } )
    ]
};


module.exports = merge( production, common );
