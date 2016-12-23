const merge  = require( 'webpack-merge' );
const common = require( './common' );


const development =
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

};


module.exports = merge( development, common );
