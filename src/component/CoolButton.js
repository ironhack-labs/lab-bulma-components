import React from 'react';
import './CoolButton.css';
import 'bulma/css/bulma.css';

const CoolButton = props => {

    return (
        <div className="nav-button">
    <button class={props.class}>{props.buttontext}</button>
    </div>
    )
}

export default CoolButton;