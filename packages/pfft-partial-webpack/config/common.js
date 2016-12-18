const paths = require( './paths' );


module.exports =
{
    context : paths.root,

    entry :
    [
        `${ paths.src }/index.js`
    ],

    output :
    {
        filename : 'bundle.js',
        path     : paths.dist
    },

    resolve :
    {
        extensions : ['.js', '.json']
    },

    module :
    {
        rules :
        [
            {
                test    : /\.json$/,
                exclude : [/node_modules/],

                use :
                [
                    {
                        loader : 'json-loader'
                    }
                ]
            }
        ]
    }
};
