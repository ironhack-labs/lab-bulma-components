import React from 'react';

import './FormField.css';

const FormField = ({ label, type, placeholder }) =>
    <div class="field">
        <label class="label">{label}</label>
        <div class="control">
            <input class="input" type={type} placeholder={placeholder} />
        </div>
    </div>

export default FormField;