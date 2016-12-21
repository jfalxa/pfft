const merge  = require( 'webpack-merge' );
const base   = require( 'pfft-partial-webpack/webpack/production' );
const css    = require( 'pfft-partial-css/webpack/production' );
const common = require( './common' );


module.exports = merge( css, common, base );
