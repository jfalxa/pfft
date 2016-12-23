import React from 'react';


export default class MyComponent extends React.Component
{
    render()
    {
        const { onClick } = this.props;

        return (

            <div onClick={ onClick }>MyComponent</div>

        );
    }
}
