import React from 'react';

const formField = ({ label, type, placeholder }) => (
  <div className="field">
    <label>{label}</label>
    <input className="input" type={type} placeholder={placeholder} />
  </div>
);

export default formField;
