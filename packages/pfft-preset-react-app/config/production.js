const merge         = require( 'webpack-merge' );
const paths         = require( 'pfft-partial-webpack/config/paths' );
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
                include : [paths.src],

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


module.exports = merge.smart( productionConfig, cssConfig, webpackConfig );
