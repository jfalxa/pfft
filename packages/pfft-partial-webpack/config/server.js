const paths = require( 'path' );


module.exports =
{
    host : '0.0.0.0',
    port : 3000,

    publicPath  : '/js/',
    contentBase : paths.public,

    quiet  : false,
    noInfo : false,
    inline : true,
    hot    : true,

    historyApiFallback : true,

    stats :
    {
        colors       : true,
        assets       : false,
        version      : false,
        hash         : false,
        timings      : false,
        chunks       : false,
        chunkModules : false
    }
};
