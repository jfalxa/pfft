const fs   = require( 'fs' );
const path = require( 'path' );


module.exports = function getScripts( module )
{
    const scripts     = {};
    const scriptPath  = `node_modules/${ module }/scripts`;
    const scriptFiles = fs.readdirSync( scriptPath );

    for ( let i=0; i<scriptFiles.length; i++ )
    {
        const script    = scriptFiles[i].replace( /\.[a-z]+$/, '' );
        scripts[script] = `pfft run ${ script }`;
    }

    return scripts;
}
