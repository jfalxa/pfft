const merge         = require( 'webpack-merge' );
const webpackConfig = require( 'pfft-partial-webpack/webpack/production' );
const cssConfig     = require( 'pfft-partial-css/webpack/production' );
const babelConfig   = require( '../config/babel' );


const productionConfig =
{
    module :
    {
        rules :
        [
            {
                test : /\.js$/,
                use :
                [
                    {
                        loader  : 'babel-loader',
                        options : babelConfig
                    }
                ]
            }
        ]
    }
};


module.exports = merge( productionConfig, cssConfig, webpackConfig );
