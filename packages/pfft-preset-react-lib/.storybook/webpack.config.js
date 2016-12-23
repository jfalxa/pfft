const postcss = require( 'pfft-partial-css/config/postcss' );


module.exports =
{
    module :
    {
        loaders :
        [
            {
                test    : /\.css$/,
                loaders : ['style', 'css', 'postcss']
            }
        ]
    },

    postcss : () => postcss
};


// awaiting for webpack 2 support
// module.exports = require( 'pfft-partial-css/config/development' );
