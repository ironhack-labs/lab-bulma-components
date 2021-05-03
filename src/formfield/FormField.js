import React from 'react';
import 'bulma/css/bulma.css';
import './FormField.css';


const FormField = ({ type, label, placeholder }) => {
  return (
    <div className='field'>
      <label className='label'>{label}</label>
      <div className='control'>
          <input className='input' type={type} placeholder={placeholder} />
      </div>     
    </div>
  );
};

export default FormField;