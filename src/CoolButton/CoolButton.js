import 'bulma/css/bulma.css';
import './CoolButton.css';
import React from 'react';

const CoolButton = props => {
    return (
        <div className="center">
            <button className={props.className}>{props.textButton}</button>
        </div>
    )
}

export default CoolButton