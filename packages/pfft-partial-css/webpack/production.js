const webpack           = require( 'webpack' );
const precss            = require( 'precss' );
const cssnano           = require( 'cssnano' );
const autoprefixer      = require( 'autoprefixer' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );


module.exports =
{
    module :
    {
        rules :
        [
            {
                test   : /\.css$/,
                loader : ExtractTextPlugin.extract( {

                    fallbackLoader : 'style-loader',

                    loader :
                    [
                        {
                            loader : 'css-loader',

                            query :
                            {
                                modules        : true,
                                minimize       : true,
                                camelCase      : true,
                                importLoaders  : 1,
                                localIdentName : '[local]'
                            }
                        },

                        'postcss-loader'
                    ]
                } )
            }
        ]
    },

    plugins :
    [
        new webpack.LoaderOptionsPlugin( { options : { postcss : [precss, autoprefixer] } } ),
        new ExtractTextPlugin( 'style.css' )
    ]
};
