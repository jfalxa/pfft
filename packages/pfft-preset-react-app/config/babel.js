const merge       = require( 'webpack-merge' );
const babelConfig = require( 'pfft-partial-babel' );


const reactBabelConfig =
{
    presets : ['react'],

    env :
    {
        development : 
        {
            plugins : ['react-hot-loader/babel']
        }
    }
};


module.exports = merge( reactBabelConfig, babelConfig );
