import React from 'react';
import "./CoolButton.css"
import 'bulma/css/bulma.css';

function CoolButton(props) {
    let buttonClasses = "button "

    if (props.className) {
        buttonClasses += props.className;
    }
    if (props.isSmall) {
        buttonClasses += " is-small"
    }
    if (props.isDanger) {
        buttonClasses += " is-danger"
    }
    if (props.isSuccess) {
        buttonClasses += " is-success"
    }
    return (
        <button className={buttonClasses}>{props.children}</button>
    );
}

export default CoolButton;