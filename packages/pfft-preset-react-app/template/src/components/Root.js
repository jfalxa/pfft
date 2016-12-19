import React                    from 'react';
import { Provider }             from 'react-redux';
import { BrowserRouter, Match } from 'react-router';

import App from 'src/components/App';


export default function Root( { store } )
{
    return (

        <Provider store={ store }>
            <BrowserRouter>
                <Match pattern="/" component={ App } />
            </BrowserRouter>
        </Provider>

    );
}
