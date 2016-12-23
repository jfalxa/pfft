import React                 from 'react';
import { storiesOf, action } from '@kadira/storybook';

import MyComponent from 'src/MyComponent';


storiesOf( 'MyComponent', module )
    .add( 'example', () =>
    (
        <MyComponent onClick={ action( 'clicked' ) } />
    ) );
