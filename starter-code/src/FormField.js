import React from 'react';

const FormField = ({ fLabel, fType, fPlaceholder }) => (
  <div className="field">
    <label className="label">{fLabel}</label>
    
    <div className="control">
      <input className="input" type={fType} placeholder={fPlaceholder} />
    </div>
  </div>
);

export default FormField;