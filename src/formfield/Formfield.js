import React from 'react';
import './Formfield.css'


const FormField = (potato) => {
  return (
  <div className="field">
    <label className="label">{potato.label}</label>
    <div className="control">
        <input className="input" type="text" placeholder= {potato.placeholder} />
    </div>
  </div>);

};

export default FormField;