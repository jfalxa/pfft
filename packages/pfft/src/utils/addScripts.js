const fs            = require( 'fs' );
const updatePackage = require( './updatePackage' );


module.exports = function addScripts( projectPath, preset )
{
    const scripts     = {};
    const scriptPath  = `${ projectPath }/node_modules/pfft-preset-${ preset }/scripts`;
    const scriptFiles = fs.readdirSync( scriptPath );

    for ( let i=0; i<scriptFiles.length; i++ )
    {
        const script = scriptFiles[i].replace( /\.sh$/, '' );

        // ignore the init script which is reserved for pfft init
        if ( script !== 'init' )
        {
            scripts[script] = `${ preset } ${ script }`;
        }
    }

    // add scripts to package.json
    updatePackage( projectPath, { scripts : scripts } );
}
