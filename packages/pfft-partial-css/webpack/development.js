const precss = require( 'precss' );


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
                            localIdentName : '[path]_[name]_[local]_[hash:base64:5]'
                        }
                    },

                    {
                        loader : 'postcss-loader',
                        options :
                        {
                            plugins : [precss]
                        }
                    }
                ]
            }
        ]
    },
};
