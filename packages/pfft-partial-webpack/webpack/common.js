const webpack = require( 'webpack' );
const paths   = require( '../config/paths' );


module.exports =
{
    context : paths.root,

    entry :
    {
        app :
        [
            `${ paths.src }/index.js`
        ]
    },

    output :
    {
        filename : 'bundle.js',
        path     : `${ paths.public }/js`
    },

    resolve :
    {
        extensions : ['.js', '.json'],

        modules :
        [
            './',
            'node_modules/'
        ]
    },

    module :
    {
        rules :
        [
            {
                test    : /\.json$/,
                include : paths.src,
                loader  : 'json-loader'
            }
        ]
    },

    plugins :
    [
        new webpack.optimize.CommonsChunkPlugin( {
            name     : 'vendor',
            filename : 'vendor.js'
        } )
    ]
};
