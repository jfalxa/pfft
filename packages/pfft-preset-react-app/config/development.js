const merge         = require( 'webpack-merge' );
const paths         = require( 'pfft-partial-webpack/config/paths' );
const webpackConfig = require( 'pfft-partial-webpack/config/development' );
const cssConfig     = require( 'pfft-partial-css/config/development' );
const babelConfig   = require( './babel' );


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
                test : /\.js$/,
                use :
                [
                    {
                        loader  : 'babel-loader',
                        options : merge( babelConfig, { plugins : ['react-hot-loader/babel'] } )
                    }
                ]
            }
        ]
    }
}


module.exports = merge( developmentConfig, cssConfig, webpackConfig );
