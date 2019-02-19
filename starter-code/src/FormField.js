import React from "react";

function FormField(props) {
    return <div className="field">
                <label className="label">{props.label}</label>
                <div>
                    <input type={props.type} placeholder={props.placeholder} />
                </div>
            </div>
}

export default FormField;

