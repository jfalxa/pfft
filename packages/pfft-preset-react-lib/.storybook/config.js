const { configure } = require( '@kadira/storybook' );


function loadStories()
{
    // go back to the root folder of the project to load stories
    require( '../../../stories/index.js' );
}


configure( loadStories, module );
