const merge         = require( 'webpack-merge' );
const webpackConfig = require( 'pfft-partial-webpack/webpack/development' );
const cssConfig     = require( 'pfft-partial-css/webpack/development' );


const developmentConfig =
{
    entry :
    [
        'react-hot-loader/patch'
    ],

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
