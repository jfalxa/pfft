const merge         = require( 'webpack-merge' );
const webpackConfig = require( 'pfft-partial-webpack/webpack/development' );
const cssConfig     = require( 'pfft-partial-css/webpack/development' );


// add react hot loader to babel plugins
const babelConfig = merge(
    require( '../config/babel' ),
    { plugins : ['react-hot-loader/babel'] }
);


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
                        options : babelConfig
                    }
                ]
            }
        ]
    }
}


module.exports = merge( developmentConfig, cssConfig, webpackConfig );
