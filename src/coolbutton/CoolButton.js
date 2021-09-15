import React from 'react';
import 'bulma/css/bulma.min.css';

const CoolButton = props => {
    return (
        <button className={props.className}>{props.children}</button>
    );
};

export default CoolButton;