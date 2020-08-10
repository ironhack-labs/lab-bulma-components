import React from 'react'
import 'bulma/css/bulma.css';
import "./FormField.css";

export const FormField = props => {
    return (
        <div>
            <div className="field">
                <label className="label">{props.label}</label>
                <div className="control">
                    <input className="imput" type={props.type} placeholder={props.placeholder}/>
                </div>
            </div>
        </div>
    )
}

export default FormField;