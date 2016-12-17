const merge         = require( 'webpack-merge' );
const webpackConfig = require( 'pfft-partial-webpack/config/production' );
const cssConfig     = require( 'pfft-partial-css/config/production' );
const babelConfig   = require( './babel' );


const productionConfig =
{
    module :
    {
        rules :
        [
            {
                test    : /\.js$/,
                include : [paths.src]

                use :
                [
                    {
                        loader  : 'babel-loader',
                        options : babelOptions
                    }
                ]
            }
        ]
    }
};


module.exports = merge.smart( productionConfig, cssConfig, webpackConfig );
