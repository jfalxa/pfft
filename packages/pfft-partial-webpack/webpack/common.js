const paths = require( '../config/paths' );


module.exports =
{
    context : paths.root,

    entry :
    [
        `${ paths.src }/index.js`
    ],

    output :
    {
        filename : 'bundle.js'
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
    }
};
