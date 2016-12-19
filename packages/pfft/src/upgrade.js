const path            = require( 'path' );
const spawn           = require( './utils/spawn' );
const findPreset      = require( './utils/findPreset' );
const addScripts      = require( './utils/addScripts' );
const addDependencies = require( './utils/addDependencies' );


module.exports = function upgrade()
{
    const projectPath = path.resolve();
    const preset      = findPreset();

    // upgrade the package to it's latest version
    spawn( 'yarn', ['upgrade', preset] );

    // and eventually include new scripts and peer dependencies
    addScripts( projectPath, preset );
    addDependencies( projectPath, preset );
};
