import React from 'react'
import 'bulma/css/bulma.css';


function CoolButton(props) {
    let buttonClasses = "button ";
    if (props.className) {
        buttonClasses += props.className
        console.log(buttonClasses)
    }
    if (props.isPrimary === true) {
        buttonClasses += " is-primary"
    }
    if (props.isSuccess === true) {
        buttonClasses += " is-success"
    }
    if (props.isDanger === true) {
        buttonClasses += " is-danger"
    }
    return (
        <button className={buttonClasses}>{props.children}</button>
    )
}



export default CoolButton;