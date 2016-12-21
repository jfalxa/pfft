const paths = require( '../config/paths' );


module.exports =
{
    host : '0.0.0.0',
    port : 3000,

    publicPath  : '/js/',
    contentBase : paths.public,

    hot    : true,
    quiet  : false,
    noInfo : false,

    historyApiFallback : true,

    stats :
    {
        colors       : true,
        assets       : false,
        version      : false,
        hash         : false,
        timings      : true,
        chunks       : true,
        chunkModules : false
    }
};
