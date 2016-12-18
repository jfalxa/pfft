const webpack           = require( 'webpack' );
const webpackDevServer  = require( 'webpack-dev-server' );
const developmentConfig = require( '../config/development' );

const { devServer } = developmentConfig;

const compiler = webpack( developmentConfig );
const server   = new webpackDevServer( compiler, devServer );

server.listen( server.port, server.host,
    () => console.log( `Start listening at http://${ server.host }:${ server.port }` ) );
