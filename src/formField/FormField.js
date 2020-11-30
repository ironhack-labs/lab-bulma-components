import React from 'react';
import 'bulma/css/bulma.css';
import './FormField.css';


export default function FormField(props) {
    return (
        <div class="formField">
            <div className="field">
                <label className="label">{props.label}</label>
                <div className="control">
                    <input
                        className="input"
                        type={props.type}
                        placeholder={props.placeholder}
                    />
                </div>
            </div>
        </div>
    )
}