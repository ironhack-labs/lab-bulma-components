import React from "react";

const CoolButton = (props) => {
    let keys = Object.values(props).slice(0,-1).join(' ')
    
    return (
        <div>
            <button className={`button ${keys}`}>{props.children}</button>
        </div>
    )
}

export default CoolButton;