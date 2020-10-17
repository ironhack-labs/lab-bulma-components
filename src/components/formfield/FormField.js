import React from 'react'
import 'bulma/css/bulma.css';

export default function FormField(props) {
    return (
        <div className="field">
            <label className="label">{props.label}</label>
            <input className="input" type={props.type} placeholder={props.placeholder}></input>
        </div>
    )
}
