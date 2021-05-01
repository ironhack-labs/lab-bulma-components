import React from 'react';

const FormField = (props) => {
    return (
        <div class="field">
            <label className="label">{props.label}</label>
            <div class="control">
                <input className="input" type={props.type} placeholder={props.placeholder} />
            </div>
        </div>
    )
}

export default FormField;