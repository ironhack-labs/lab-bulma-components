import 'bulma/css/bulma.css';
import React from 'react';

function CoolButton(props) {
    return (
        <button className={`button ${props.styles}`}>{props.btnContent}</button>
    );
}

export default CoolButton;