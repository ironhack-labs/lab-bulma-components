import React from 'react';

export const FormField = ({label, type, placeholder}) => {
  console.log(label, type, placeholder)
  return (
    <div className="field">
      <label>{label}
      <div className="control">
        <input className="input" type={type} placeholder={placeholder}/>
      </div>
      </label>
    </div>
  )
}

export default FormField;