const spawn         = require( './spawn' );
const updatePackage = require( './updatePackage' );


module.exports = function addDependencies( path, preset )
{
    const presetPath = `${ path }/node_modules/${ preset }`;

    // get package json of the project and the preset
    const { peerDependencies } = require( `${ presetPath }/package.json` );

    // add dependencies to package.json and set the root folder as a base for
    // requiring modules as well so we can do require( 'src/index' ) for example
    updatePackage( path, { moduleRoots : ['.'], dependencies : peerDependencies } );

    // install the dependencies
    spawn( 'yarn', ['install'] );
}
