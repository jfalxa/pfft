const fs = require( 'fs' );


module.exports = function udpatePackageJson( path, packageJson )
{
    // preprare the package.json contents
    const packageJsonStr = JSON.stringify( packageJson, null, '  ' );

    // and write them in the file
    fs.writeFileSync( `${ path }/package.json`, packageJsonStr );
}
