import React, { Component } from "react";

const CoolButton = (props) => {

    return (
        <div>
            <button className={props.className}>{props.buttontext}</button>
        </div>
    )
}


export default CoolButton;