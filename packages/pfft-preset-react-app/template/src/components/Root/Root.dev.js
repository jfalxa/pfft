import React            from 'react';
import { AppContainer } from 'react-hot-loader';

import RootBase from './Root.prod';


export default function Root( { store } )
{
    return (

        <AppContainer>
            <RootBase store={ store } />
        </AppContainer>
    );
}
