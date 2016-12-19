const fs            = require( 'fs' );
const updatePackage = require( './updatePackage' );


module.exports = function addScripts( path, preset )
{
    const scripts     = {};
    const scriptPath  = `${ path }/node_modules/${ preset }/scripts`;
    const scriptFiles = fs.readdirSync( scriptPath );

    for ( let i=0; i<scriptFiles.length; i++ )
    {
        const script    = scriptFiles[i].replace( /\.[a-z]+$/, '' );
        scripts[script] = `pfft run ${ script }`;
    }

    // add scripts to package.json
    updatePackage( projectPath, { scripts } );
}
