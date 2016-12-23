const cssImport = require( 'postcss-import' );
const cssnext   = require( 'postcss-cssnext' );


module.exports =
{
    plugins :
    [
        cssImport,
        cssnext
    ]
};
