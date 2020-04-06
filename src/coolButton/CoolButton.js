import React from 'react';
import 'bulma/css/bulma.css';

const CoolButton = (props) => {
    return (
        <a className={props.className}  href={props.href}>
            <span>{props.value}</span>
        </a>
    );
};
    
export default CoolButton;