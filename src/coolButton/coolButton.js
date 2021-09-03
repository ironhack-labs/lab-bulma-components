import React from "react";
import "bulma/css/bulma.css";
import "./coolButton.css"

const CoolButton = (props) => (
        <button className={`button ${props.className}`}>{props.children}</button>
    );

export default CoolButton;
