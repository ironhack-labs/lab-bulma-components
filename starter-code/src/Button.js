import React from "react";

const Button = ({name,type}) =>{
    return (
        <a className={`button ${type}`}>
            <strong>{name}</strong>
        </a>
    )
}


export default Button;