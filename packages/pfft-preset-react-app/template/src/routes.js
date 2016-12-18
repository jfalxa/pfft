import React             from 'react';
import { Route, Router } from 'react-router';

import App from 'src/components/App';


export default function Routes( { history } )
{
    return (

        <Router history={ history }>
            <Route path="/" component={ App } />
        </Router>

    );
}
