const precss       = require( 'precss' );
const autoprefixer = require( 'autoprefixer' );


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
                            options :
                            {
                                modules        : true,
                                camelCase      : true,
                                importLoaders  : 1,
                                localIdentName : '[path]_[name]_[local]_[hash:base64:5]'
                            }
                        },

                        {
                            loader : 'postcss-loader',
                            options :
                            {
                                plugins : [precss, autoprefixer]
                            }
                        }
                    ]
                } )
            }
        ]
    },


    plugins :
    [
        new ExtractTextPlugin( 'style.css' )
    ]
};
