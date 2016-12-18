const merge        = require( 'webpack-merge' );
const paths        = require( './paths' );
const server       = require( './server' );
const commonConfig = require( './common' );


const developmentConfig =
{
    devServer : server,

    devtool : 'cheap-eval-source-map',

    entry :
    [
        `webpack-dev-server/client?http://${ server.host }:${ server.port }`,
        'webpack/hot/only-dev-server'
    ],

    output :
    {
        path       : `${ paths.public }/js`,
        publicPath : '/js/'
    }
};


module.exports = merge( developmentConfig, commonConfig );
