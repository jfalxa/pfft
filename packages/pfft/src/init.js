const path          = require( 'path' );
const merge         = require( 'lodash.merge' );
const spawn         = require( './utils/spawn' );
const getScripts    = require( './utils/getScripts' );
const updatePackage = require( './utils/updatePackage' );


module.exports = function init( preset, name )
{
    const presetModule = `pfft-preset-${ preset }`;
    const projectPath  = path.resolve( name || '.' );
    const presetPath   = `${ projectPath }/node_modules/${ presetModule }`;

    // create project dir
    if ( name )
    {
        spawn( 'mkdir', ['-p', name] );
        process.chdir( projectPath );
    }

    // init yarn and add preset
    spawn( 'yarn', ['init', '-y'] );
    spawn( 'yarn', ['add', '--dev', presetModule] );

    // get package json of the project and the preset
    const packageJSON          = require( `${ projectPath }/package.json` );
    const { peerDependencies } = require( `${ presetPath }/package.json` );

    // add scripts to package.json
    merge( packageJSON, { scripts : getScripts( presetModule ) } );

    // add dependencies to package.json
    merge( packageJSON, { dependencies : peerDependencies } );

    // write changes to disk
    updatePackage( projectPath, packageJSON );

    // install the dependencies
    spawn( 'yarn', ['install'] );

    // copy the preset template to the project
    spawn( 'cp', ['-a', `${ presetPath }/template/.`, './'] );
    spawn( 'mv', ['gitignore', '.gitignore'] );

    // init a git repo and add the inital commit
    spawn( 'git', ['init'] );
    spawn( 'git', ['add', '.'] );
    spawn( 'git', ['commit', '-m', 'Initial commit'] );
}
