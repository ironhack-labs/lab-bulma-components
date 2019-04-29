import React from 'react';

function CoolButton(props) {
    let className = "button"
    if (props.isDanger) {
        className+= " is-danger"
    }
    if (props.isSuccess) {
        className+= " is-success"
    }
    if (props.isRounded) {
        className+= " is-rounded"
    }
    return(
        <button className={className}>{props.children}</button>
    )
}

export default CoolButton;