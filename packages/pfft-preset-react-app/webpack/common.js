const merge  = require( 'webpack-merge' );
const images = require( 'pfft-partial-css/webpack/images' );
const vendor = require( '../config/vendor' );


const common =
{
    entry :
    {
        vendor :
        [
            'react',
            'react-dom',
            'react-router',
            'react-redux',
            'redux',
            'redux-thunk'
        ]
    },

    module :
    {
        rules :
        [
            {
                test    : /\.js$/,
                exclude : /node_modules/,

                use :
                [
                    {
                        loader  : 'babel-loader',
                        options : { cacheDirectory : true }
                    }
                ]
            }
        ]
    }
};


module.exports = merge( images, common );
