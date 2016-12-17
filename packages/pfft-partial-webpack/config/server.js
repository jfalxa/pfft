module.exports =
{
    host : '0.0.0.0',
    port : 3000,

    contentBase : require( './paths' ).public.split( '/' ).pop(),

    quiet  : false,
    noInfo : false,
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
