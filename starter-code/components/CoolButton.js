import React from "react";

function CoolButton(props) {
    return (
     <div className="buttons">
        <button className={props.buttonClass}>{props.buttonText}</button>
     </div>   
    );
}

export default CoolButton;