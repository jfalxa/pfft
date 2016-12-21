module.exports =
{
    module :
    {
        rules :
        [
            {
                test : /\.(png|jpg|svg|ico)/,

                use :
                [
                    {
                        loader : 'url-loader',

                        options :
                        {
                            limit      : 10000,
                            name       : '[name].[ext]',
                            outputPath : 'public/images',
                            publicPath : 'public/images'
                        }
                    }
                ]
            }
        ]
    }
};
