import React                    from 'react';
import { BrowserRouter, Match } from 'react-router';

import App from 'src/components/App';


export default function Routes()
{
    return (

        <BrowserRouter>
            <Match pattern="/" component={ App } />
        </BrowserRouter>

    );
}
