import React from 'react';
import 'bulma/css/bulma.css';
import "./FormField.css";

function FormField({label, type, placeholder}) {
  return (
    <div id="form">
      <div class="field">
        <label class="label">{label}</label>
        <div class="control">
          <input class="input" type={type} placeholder={placeholder} />
        </div>
      </div>    
    </div>
  );
}

export default FormField;
