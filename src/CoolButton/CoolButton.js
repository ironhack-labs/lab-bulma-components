import React from 'react';
import 'bulma/css/bulma.css';
import './CoolButton.css'

const Button = props => {

    let success = props.isSuccess ? "is-success" : ""
    let danger = props.isDanger ? " is-danger" : ""
    let small = props.isSmall ? "is-small " : ""
    var clases = 'button ' + props.className + ' ' + success + ' ' + danger + ' ' + small
    
    return (

        <button className={clases} >{props.value}</button>
    );
    
};

export default Button;