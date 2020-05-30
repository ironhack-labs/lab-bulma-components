import React from "react";

function CoolButton (props) {
    return (
        <div>
           <button className="button">{props.name}</button>
        </div>
    )
}

export default CoolButton;