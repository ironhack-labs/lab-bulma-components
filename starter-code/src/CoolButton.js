import React, { Component } from "react";

function CoolButton(props) {
    return(
<div>
<a className={props.className}>{props.name}</a>
</div>
    )
}

export default CoolButton;

