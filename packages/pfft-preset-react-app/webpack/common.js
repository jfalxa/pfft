const merge  = require( 'webpack-merge' );
const images = require( 'pfft-partial-webpack/webpack/images' );
const vendor = require( '../config/vendor' );


const common =
{
    entry :
    {
        vendor : vendor
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
