const path       = require( 'path' );
const spawn      = require( './utils/spawn' );
const addScripts = require( './utils/addScripts' );


module.exports = function init( preset, target )
{
    const projectPath  = path.resolve( target || '.' );
    const presetModule = `pfft-preset-${ preset }`;
    const presetPath   = `${ projectPath }/node_modules/${ presetModule }`;

    // create project dir
    if ( target )
    {
        spawn( 'mkdir', ['-p', target] );
        process.chdir( projectPath );
    }

    // init yarn and add preset
    spawn( 'yarn', ['init', '-y'] );
    spawn( 'yarn', ['add', '--dev', presetModule] );

    // copy the preset template to the project
    spawn( 'cp', ['-a', `${ presetPath }/template/.`, './'] );
    spawn( 'mv', ['gitignore', '.gitignore'] );

    // execute the init script of the preset
    spawn( 'sh', [`${ presetPath }/scripts/init.sh`] );

    // include the preset scripts in the new project
    addScripts( projectPath, preset );

    // init a git repo and add the inital commit
    spawn( 'git', ['init'] );
    spawn( 'git', ['add', '.'] );
    spawn( 'git', ['commit', '-m', 'Initial commit'] );
}
