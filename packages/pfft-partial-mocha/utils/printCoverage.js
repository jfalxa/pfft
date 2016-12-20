const istanbul = require( 'istanbul' );


const collector = new istanbul.Collector(),
const reporter  = new istanbul.Reporter()


module.exports = function printCoverage( failures )
{
    // before exiting, print coverage report
    collector.add( global.__coverage__ );
    reporter.addAll( ['text', 'html'] );
    reporter.write( collector, true, () => {} );

    // exit, on non-zero if there are failed tests
    process.on( 'exit', () => process.exit( failures ) );
};
