import React              from 'react';
import { render }         from 'react-dom';
import { AppContainer }   from 'react-hot-loader';

import reducers    from 'src/reducers';
import createStore from 'src/services/store';
import Root        from 'src/components/Root';


// -------------------------------------------------------------------------- //
// Main                                                                       //
// -------------------------------------------------------------------------- //

function initApp()
{
    const store     = createStore( reducers );
    const container = document.getElementById( 'main' );

    return { store, container };
}


export default function main( app=initApp() )
{
    // define rendered element
    const content =
    (
        <AppContainer>
            <Root store={ app.store } />
        </AppContainer>
    );

    // render it in its container
    render( content, app.container );

    // return the current config in order to reuse it when there's a hot reload
    return app;
}


// -------------------------------------------------------------------------- //
// Start app + hot reloading                                                  //
// -------------------------------------------------------------------------- //

// exec main
const app = main();

// hot reload
if ( process.env.NODE_ENV === 'development' && module.hot )
{
    module.hot.accept( 'src/components/Root', () => main( app ) );
}
