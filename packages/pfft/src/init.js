function spawn( command, args )
{
    return require( 'cross-spawn' ).sync( command, args, { stdio: 'inherit' } );
}


module.exports = function init( preset, name )
{
    const presetModule = `pfft-preset-${ preset }`;

    if ( name )
    {
        spawn( 'mkdir', ['-p', name] );
        spawn( 'cd', [name] );
    }

    spawn( 'yarn', ['init', '-y'] );
    spawn( 'yarn', ['add', presetModule] );
}
