import React from 'react';

const CoolButton = (props) => {


    return <button class="button is-small is-success">{props.children}</button>
}

export default CoolButton;