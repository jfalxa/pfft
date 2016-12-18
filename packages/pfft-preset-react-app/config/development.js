const merge         = require( 'webpack-merge' );
const paths         = require( 'pfft-partial-webpack/config/paths' );
const webpackConfig = require( 'pfft-partial-webpack/config/development' );
const cssConfig     = require( 'pfft-partial-css/config/development' );
const babelConfig   = require( './babel' );


const babelOptions = merge( babelConfig, { plugins : ['react-hot-loader/babel'] } );


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
                include : [paths.src],

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
}


module.exports = merge.smart( developmentConfig, cssConfig, webpackConfig );

console.log( JSON.stringify( module.exports, 0, '\n' ) );
