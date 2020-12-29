import React from 'react';

import 'bulma/css/bulma.css';

/*
function CoolButton(props) {

    let buttonClasses = props.className + " button ";

    if (props.isSuccess) {
        buttonClasses += "is-success ";
    }

    if (props.isRounded) {
        buttonClasses += "is-rounded ";
    }

    if (props.isDanger) {
        buttonClasses += "is-danger ";
    }

    if (props.isSmall) {
        buttonClasses += "is-small";
    }

    return (
        <button className={buttonClasses}>{props.children}</button>
    );
}
*/


function CoolButton(props) {

    const buttonClasses = ["button"];

    // if there is another class added manually inside the CoolButton component
    if (props.className) {
        buttonClasses.push(props.className);
    }

    if (props.isSuccess) {
        buttonClasses.push("is-success");
    }

    if (props.isRounded) {
        buttonClasses.push("is-rounded");
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