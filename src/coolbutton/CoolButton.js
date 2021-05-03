import React from 'react';
import 'bulma/css/bulma.css';

const CoolButton = (props) => {
    return (
        <button className={`button ${props.className}
        ${props.isSuccess ? 'is-success' : ''}
        ${props.isDanger ? 'is-danger' : ''}
        `}
        >
        {props.buttonName}
        </button>
    )
}

export default CoolButton;