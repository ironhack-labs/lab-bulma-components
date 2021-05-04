import React from 'react';
import 'bulma/css/bulma.css';
import './FormField.css';

const FormField = ({label, type, placeholder}) => {
  return (
    <div class="field">
        <label class="label">{label}</label>
        <div class="control">
            <input class="input" type={type} placeholder={placeholder} />
        </div>
    </div>
  )
};

export default FormField;