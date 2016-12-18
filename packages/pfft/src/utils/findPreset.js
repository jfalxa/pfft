const path = require( 'path' );


module.exports = function findPreset()
{
    const packageJSON = require( path.resolve( 'package.json' ) );

    for ( const module in packageJSON.devDependencies )
    {
        if ( module.indexOf( 'pfft-preset-' ) === 0 )
        {
            return path.resolve( `node_modules/${ module }` );
        }
    }

    return null;
}
