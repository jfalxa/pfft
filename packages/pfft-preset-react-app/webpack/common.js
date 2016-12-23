const merge  = require( 'webpack-merge' );
const images = require( 'pfft-partial-css/webpack/images' );


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
    }
};


module.exports = merge( images, common );
