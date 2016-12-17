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
        path     : paths.dist,
        filename : 'bundle.js'
    }

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
                include : [paths.src]

                use :
                [
                    {
                        loader : 'json-loader'
                    }
                ]
            },

            {
                test    : /\.js$/,
                include : [paths.src]

                use :
                [
                    {
                        loader : 'babel-loader'
                    }
                ]
            }
        ]
    }
};
