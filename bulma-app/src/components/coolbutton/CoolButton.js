import React from 'react';
import 'bulma/css/bulma.css';

const CoolButton = props => {
    return (
        <button className={props.className}>{props.text}</button>
    )
}

export default CoolButton