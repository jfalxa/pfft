const merge  = require( 'webpack-merge' );
const react  = require( 'pfft-partial-react/webpack/production' );
const base   = require( 'pfft-partial-webpack/webpack/production' );
const common = require( './common' );


module.exports = merge( react, common, base );
