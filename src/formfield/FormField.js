import React from 'react';
import 'bulma/css/bulma.css';

const FormField = ({label, type}) => {
    return (
        <div className="field">
            <label className="label">{label}</label>
            <div className="control">
                <input className="input" type={type} placeholder="e.g Alex Smith" />
            </div>
        </div>
    );
}

export default FormField;