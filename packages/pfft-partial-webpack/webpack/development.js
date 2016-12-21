const webpack = require( 'webpack' );
const merge   = require( 'webpack-merge' );
const common  = require( './common' );
const server  = require( '../config/server' );


const development =
{
    devServer : server,

    devtool : 'eval-cheap-module-source-map',

    performance :
    {
        hints : false
    },

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
        new webpack.DefinePlugin( { 'process.env.NODE_ENV' : '"development"' } ),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ]
};


module.exports = merge( development, common );
