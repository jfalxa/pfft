const fs    = require( 'fs' );
const merge = require( 'lodash.merge' );


module.exports = function udpatePackageJSON( path, update )
{
    const packagePath = `${ path }/package.json`;

    // get the current package.json and apply the update
    const packageJSON        = require( packagePath );
    const updatedPackageJSON = merge( packageJSON, update );

    // preprare the package.json contents
    const packageJSONStr = JSON.stringify( updatedPackageJSON, null, '  ' );

    // and write them in the file
    fs.writeFileSync( packagePath, packageJSONStr );
}
