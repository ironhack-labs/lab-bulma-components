
import React from "react";
import 'bulma/css/bulma.css';

function FormField(props) {
    const {label, type, placeholder} = props;
    return (
        <div className="field">
            <label className="label">{label}</label>

            <div className="control">
                <input className="input" type={type} placeholder={placeholder} />
            </div>
        </div>
    );
};

export default FormField;