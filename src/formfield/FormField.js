// components/FormField.js

import React from 'react';
import 'bulma/css/bulma.css';
import './FormField.css';

const FormField = props => {
  const { label, type, placeholder } = props;
  return (
    <div className='form-field'>
      <label className='label'>{label}</label>
      <div className='control'>
        <input className='input' type={type} placeholder={placeholder} />
      </div>
    </div>
  );
};

export default FormField;
