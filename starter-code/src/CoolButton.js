import React from 'react';

function CoolButton (props) {
    return(
        <button className={props.classBtn} onClick={props.onClick}>{props.name}</button>
    )
}


export default CoolButton;