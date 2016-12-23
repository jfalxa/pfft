const merge             = require( 'webpack-merge' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const common            = require( './common' );


const production =
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
        new ExtractTextPlugin( '../css/style.css' )
    ]
};


module.exports = merge( production, common );
