import React from 'react';
import 'bulma/css/bulma.css';

const CoolButton = (props) => {

    return (
        <div className="CoolButton">
            <button className={'button ' + props.className} type={props.type}>{props.title}</button>
        </div>
    )
}

export default CoolButton;
