import React from 'react';

const FormField = (props) => {
  // <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
  return (
    <div className="field">
      <label className="label">{props.label}</label>
      <div className="control">
        <input className="input" type={props.type} placeholder={props.placeholder} />
      </div>
    </div>
  )
}

export default FormField;