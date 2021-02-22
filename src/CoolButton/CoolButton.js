import React from 'react';
import 'bulma/css/bulma.css';


const CoolButton = (props) => {
    return (
        <button type={props.typeBtn} className={props.classes}>
            {props.children}
        </button>
    );
}

export default CoolButton;