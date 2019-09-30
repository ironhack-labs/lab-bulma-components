import React from "react";

function CoolButton(props) {
    return <button className={props.className}>{props.text}</button>;
}

export default CoolButton;

