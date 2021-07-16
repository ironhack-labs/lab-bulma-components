import React from 'react';
import 'bulma/css/bulma.css'

const CoolButton = props => {
    return (
        <button className = {props.className}><a href = {props.href}>{props.text}</a> </button>
    )
}

export default CoolButton