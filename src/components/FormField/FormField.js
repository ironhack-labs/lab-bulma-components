import React from 'react';
import './FormField.css';
import 'bulma/css/bulma.css';

const FormField = ({ label, type, placeholder }) => {
    return(
        <div className="field">
            <label className="label">{label}</label>
            <input className="input" type={type} placeholder={placeholder} />
        </div>
    );
};

export default FormField;