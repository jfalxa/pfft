require( '../utils/globals' );
require( 'babel/register' )( require( '../config/babel' ) );

const Mocha         = require( 'mocha' );
const listSpecs     = require( '../utils/listSpecs' );
const printCoverage = require( '../utils/printCoverage' );


module.exports = function test()
{
    const mocha = new Mocha();

    // add the test specs to mocha
    listSpecs( mocha, './test/specs/**/*.spec.js' );

    // run them, then print the coverage report
    return mocha.run( printCoverage );
}
