const merge         = require( 'webpack-merge' );
const webpackConfig = require( 'pfft-partial-webpack/webpack/development' );
const cssConfig     = require( 'pfft-partial-css/webpack/development' );
const vendor        = require( '../config/vendor' );


const developmentConfig =
{
    entry :
    {
        app    : ['react-hot-loader/patch'],
        vendor : vendor
    },

    module :
    {
        rules :
        [
            {
                test    : /\.js$/,
                exclude : /node_modules/,

                use :
                [
                    {
                        loader  : 'babel-loader',
                        options : { cacheDirectory : true }
                    }
                ]
            }
        ]
    }
}


module.exports = merge( developmentConfig, cssConfig, webpackConfig );
