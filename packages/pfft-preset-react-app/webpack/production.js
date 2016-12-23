const merge  = require( 'webpack-merge' );
const react  = require( 'pfft-partial-react/webpack/production' );
const css    = require( 'pfft-partial-css/webpack/production' );
const base   = require( 'pfft-partial-webpack/webpack/production' );
const common = require( './common' );


module.exports = merge( react, css, common, base );
