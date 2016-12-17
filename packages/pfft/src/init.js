const path          = require( 'path' );
const merge         = require( 'lodash.merge' );
const spawn         = require( './spawn' );
const getScripts    = require( './getScripts' );
const updatePackage = require( './updatePackage' );


module.exports = function init( preset, name )
{
    const presetModule = `pfft-preset-${ preset }`;
    const projectPath  = path.resolve( name || '.' );

    // create project dir
    if ( name )
    {
        spawn( 'mkdir', ['-p', name] );
    }

    process.chdir( projectPath );

    // init yarn and add preset
    spawn( 'yarn', ['init', '-y'] );
    spawn( 'yarn', ['add', presetModule] );

    // get package json of the project and the preset
    const packageJSON          = require( './package.json' );
    const { peerDependencies } = require( `${ presetModule }/package.json` );

    // add dependencies to package.json
    merge( packageJSON, { dependencies : peerDependencies } );

    // add scripts to package.json
    merge( packageJSON, { scripts : getScripts( presetModule ) } );

    updatePackage( projectPath, packageJSON );

    spawn( 'yarn', ['install'] );
}
