const spawn         = require( './spawn' );
const updatePackage = require( './updatePackage' );


module.exports = function addDependencies( path, preset )
{
    const presetPath = `${ path }/node_modules/${ preset }`;

    // get package json of the project and the preset
    const { peerDependencies } = require( `${ presetPath }/package.json` );

    // add dependencies to package.json
    updatePackage( path, { dependencies : peerDependencies } );

    // install the dependencies
    spawn( 'yarn', ['install'] );
}
