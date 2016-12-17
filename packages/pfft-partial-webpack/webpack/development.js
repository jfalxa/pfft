const merge        = require( 'webpack-merge' );
const server       = require( '../config/server' );
const commonConfig = require( './common' );


const developmentConfig =
{
    devtool : 'cheap-eval-source-map',

    entry :
    [
        `webpack-dev-server/client?http://${ server.host }:${ server.port }`,
        'webpack/hot/only-dev-server'
    ]
};


module.exports = merge( developmentConfig, commonConfig );
