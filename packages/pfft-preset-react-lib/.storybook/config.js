const { configure } = require( '@kadira/storybook' );

// import lib css in storybook
require( '../../../src/styles/index.css' );


function loadStories()
{
    // go back to the root folder of the project to load stories
    require( '../../../stories/index.js' );
}


configure( loadStories, module );
