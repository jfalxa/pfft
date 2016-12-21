const webpack = require( 'webpack' );
const precss  = require( 'precss' );


module.exports =
{
    module :
    {
        rules :
        [
            {
                test : /\.css$/,
                use  :
                [
                    'style-loader',

                    {
                        loader : 'css-loader',
                        options :
                        {
                            modules        : true,
                            camelCase      : true,
                            importLoaders  : 1,
                            localIdentName : '[name]_[local]_[hash:base64:5]'
                        }
                    },

                    'postcss-loader'
                ]
            }
        ]
    },

    plugins :
    [
        new webpack.LoaderOptionsPlugin( {
            options : { postcss : [precss] }
        } )
    ]
};
