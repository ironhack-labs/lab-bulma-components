import React from "react";
import "bulma/css/bulma.css";

function CoolButton(props) {
    return(
        <button class={props.className}>{props.label}</button>
    );
}

export default CoolButton;