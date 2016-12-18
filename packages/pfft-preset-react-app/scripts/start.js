#!/usr/bin/node

const start             = require( 'pfft-partial-webpack/scripts/start' );
const developmentConfig = require( '../webpack/development' );


module.exports = function startReact()
{
    start( developmentConfig );
}
