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
        filename : 'bundle.js'
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
                include : [paths.src],

                use :
                [
                    {
                        loader : 'json-loader'
                    }
                ]
            },

            {
                test    : /\.js$/,
                include : [paths.src],

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
