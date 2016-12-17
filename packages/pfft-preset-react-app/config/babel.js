const merge       = require( 'webpack-merge' );
const babelConfig = require( 'pfft-partial-babel' );


module.exports = merge( { presets : ['react'] }, babelConfig );
