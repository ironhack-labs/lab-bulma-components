import React from 'react';

function CoolButton (props) {
    return (
        <button className={`button ${props.class}`}>
            {props.children}
        </button>
    );
}


export default CoolButton;