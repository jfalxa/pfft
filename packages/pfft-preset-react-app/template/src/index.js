import React              from 'react';
import { render }         from 'react-dom';
import { Provider }       from 'react-redux';
import { AppContainer }   from 'react-hot-loader';

import createStore from 'src/services/store';
import reducers    from 'src/reducers';
import Routes      from 'src/routes';


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
            <Provider store={ app.store }>
                <Routes />
            </Provider>
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
    module.hot.accept( './components/Routes.js', () => main( app ) );
}
