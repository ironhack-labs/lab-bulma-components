
import React from "react"
import 'bulma/css/bulma.css';

const FormField = (props) => (
    <div className="field container">
        <label className="label">{props.label}</label>
        <div className="control">
            <input className="input" type={props.type} placeholder={props.placeholder} />
        </div>
    </div>
);
export default FormField;