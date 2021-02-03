import React from "react";

function CoolButton(props) {

    return(
        <button type="button" className={`btn ${props.className}`}>{props.children}</button>
    )
}

export default CoolButton;