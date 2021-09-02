import React from "react";
import "bulma/css/bulma.css";
import "./CoolButton.css"

const CoolButton = (props) => {
    return(
        <div className="teste">
        <button className={props.class}>{props.children}</button>
        </div>
    )
    
}

export default CoolButton;
