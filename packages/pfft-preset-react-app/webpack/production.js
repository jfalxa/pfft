const merge         = require( 'webpack-merge' );
const webpackConfig = require( 'pfft-partial-webpack/webpack/production' );
const cssConfig     = require( 'pfft-partial-css/webpack/production' );
const vendor        = require( '../config/vendor' );


const productionConfig =
{
    entry :
    {
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
};


module.exports = merge( productionConfig, cssConfig, webpackConfig );
