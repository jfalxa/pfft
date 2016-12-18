const path          = require( 'path' );
const merge         = require( 'lodash.merge' );
const spawn         = require( './utils/spawn' );
const getScripts    = require( './utils/getScripts' );
const updatePackage = require( './utils/updatePackage' );


module.exports = function init( preset, name )
{
    const presetModule = `pfft-preset-${ preset }`;
    const projectPath  = path.resolve( name || '.' );

    // create project dir
    if ( name )
    {
        spawn( 'mkdir', ['-p', name] );
        process.chdir( projectPath );
    }

    // init yarn and add preset
    spawn( 'yarn', ['init', '-y'] );
    spawn( 'yarn', ['add', '--dev', presetModule, 'pfft-scripts'] );

    // get package json of the project and the preset
    const packageJSON          = require( `${ projectPath }/package.json` );
    const { peerDependencies } = require( `${ projectPath }/node_modules/${ presetModule }/package.json` );

    // add dependencies to package.json
    merge( packageJSON, { dependencies : peerDependencies } );

    // add scripts to package.json
    merge( packageJSON, { scripts : getScripts( presetModule ) } );

    updatePackage( projectPath, packageJSON );

    spawn( 'yarn', ['install'] );
}
