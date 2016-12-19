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
            paths.root,
            'node_modules'
        ]
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
