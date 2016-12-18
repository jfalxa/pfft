const webpack      = require( 'webpack' );
const merge        = require( 'webpack-merge' );
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
        publicPath : '/js/'
    },

    plugins :
    [
        new webpack.DefinePlugin( { 'process.env.NODE_ENV' : '"development"' } ),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
};


module.exports = merge( developmentConfig, commonConfig );
