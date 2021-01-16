import React from 'react';
import './CoolButton.css';
import 'bulma/css/bulma.css';

function CoolButton(props) {

    const buttonClasses = ["button"];

    if (props.className) {
        buttonClasses.push(props.className);
    }
    if (props.isSuccess) {
        buttonClasses.push("is-success");
    }
    if (props.isDanger) {
        buttonClasses.push("is-danger");
    }
    if (props.isSmall) {
        buttonClasses.push("is-small");
    }
    return (
        <button className={buttonClasses.join(" ")}>{props.children}</button>
    );
}

export default CoolButton;