import React from 'react';

export default class CoolButton extends React.Component {
    render() {
        return (
            <div>
                <button> </button>
            </div>
        )
    }
}



// // JSX version
// <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
// <CoolButton isSmall isSuccess>Button 2</CoolButton>
// // <!-- What is rendered in the DOM -->
// <button class="button is-rounded my-class is-danger is-small">Button 1</button>
// <button class="button is-small is-success">Button 2</button>