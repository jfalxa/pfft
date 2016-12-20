import main from 'lib';


describe( 'Lib entry point', () =>
{

    it( 'should export a function', () =>
    {
        expect( main ).to.be.a( 'function' );
    } );


    it( 'should execute correctly', () =>
    {
        expect( main() ).to.be.true;
    } );

} );
