import React from 'react';
import 'bulma/css/bulma.css';

// Iteration 3
const CoolButton = props => {
    return (
        <button className={props.class}>{props.children}</button>
    )
}

export default CoolButton;