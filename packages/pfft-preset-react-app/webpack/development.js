const merge  = require( 'webpack-merge' );
const react  = require( 'pfft-partial-react/webpack/development' );
const css    = require( 'pfft-partial-css/webpack/development' );
const base   = require( 'pfft-partial-webpack/webpack/development' );
const common = require( './common' );


module.exports = merge( react, css, common, base );
