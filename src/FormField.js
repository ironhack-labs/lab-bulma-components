import React from 'react';
import 'bulma/css/bulma.css'

export default function FormField(props) {
    return (
        <div className="field">
            <label className="label">{props.label}</label>
            <div className="control">
                <input type={props.type} className="input" placeholder={props.placeholder}/>
            </div>
        </div>
    )
}