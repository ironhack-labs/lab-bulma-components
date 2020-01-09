import React, { Component } from "react";

function CoolButton(props) {
    let btnClassName = "button "
    if (props.isPrimary) {
        btnClassName += "is-primary ";
    }
    if (props.isSmall) {
        btnClassName += "is-small ";
    }
    if (props.isSuccess) {
        btnClassName += "is-success ";
    }
    if (props.isDanger) {
        btnClassName += "is-danger ";
    }
    if (props.className) {
        btnClassName += props.className
    }

    return <div>
        <button className={btnClassName}>{props.name}</button>
    </div>

}

export default CoolButton;