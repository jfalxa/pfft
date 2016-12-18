const fs   = require( 'fs' );
const path = require( 'path' );


module.exports = function getScripts( module )
{
    const scripts     = {};
    const scriptPath  = `node_modules/${ module }/scripts`;
    const scriptFiles = fs.readdirSync( scriptPath );

    for ( let i=0; i<scriptFiles.length; i++ )
    {
        const scriptFile    = scriptFiles[i];
        const scriptName    = scriptFile.replace( /\.[a-z]+$/, '' );
        scripts[scriptName] = `./${ scriptPath }/${ scriptFile }`;
    }

    return scripts;
}
