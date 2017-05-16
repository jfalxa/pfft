import test from 'ava';

import lib from '../src';


test( 'lib returns true', t =>
{
    t.true( lib() );
} );
