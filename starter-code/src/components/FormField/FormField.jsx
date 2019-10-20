import React from 'react';

const FormField = ({ labelName, type, placeholder }) => {
  return (
    <div className="field">
      <label className="label">{labelName}</label>
      <div className="control">
        <input className="input" type={type} placeholder={placeholder} />
      </div>
    </div>
  );
};

export default FormField;
