const webpack      = require( 'webpack' );
const merge        = require( 'webpack-merge' );
const server       = require( '../config/server' );
const commonConfig = require( './common' );


const developmentConfig =
{
    devServer : server,

    devtool : 'cheap-eval-source-map',

    entry :
    {
        app :
        [
            `webpack-dev-server/client?http://${ server.host }:${ server.port }`,
            'webpack/hot/only-dev-server'
        ]
    },

    output :
    {
        publicPath : server.publicPath
    },

    plugins :
    [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
};


module.exports = merge( developmentConfig, commonConfig );
