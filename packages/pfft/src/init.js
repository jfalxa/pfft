const path            = require( 'path' );
const spawn           = require( './utils/spawn' );
const addScripts      = require( './utils/addScripts' );
const addDependencies = require( './utils/addDependencies' );


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

    // include the preset scripts in the new project
    addScripts( projectPath, presetModule );

    // and link the peer dependencies
    addDependencies( projectPath, presetModule );

    // copy the preset template to the project
    spawn( 'cp', ['-a', `${ presetPath }/template/.`, './'] );
    spawn( 'mv', ['gitignore', '.gitignore'] );

    // init a git repo and add the inital commit
    spawn( 'git', ['init'] );
    spawn( 'git', ['add', '.'] );
    spawn( 'git', ['commit', '-m', 'Initial commit'] );
}
