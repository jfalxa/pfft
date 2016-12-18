#!/usr/bin/node

const start             = require( 'pfft-partial-webpack/scripts/start' );
const developmentConfig = require( '../config/development' );


module.exports = function startReact()
{
    start( developmentConfig );
}
