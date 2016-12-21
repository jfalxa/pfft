const merge  = require( 'webpack-merge' );
const base   = require( 'pfft-partial-webpack/webpack/development' );
const css    = require( 'pfft-partial-css/webpack/development' );
const common = require( './common' );


const development =
{
    entry :
    {
        app : ['react-hot-loader/patch']
    }
};


module.exports = merge( development, css, common, base );
