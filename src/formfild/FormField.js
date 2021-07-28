import React from 'react';
import './FormField.css';

const FormField = props =>
(<div className="field">
    <label className="label" label={props.label}>{props.label}</label>
    <div className="control">
      <input className="input" type={props.type} placeholder={props.placeholder} />
    </div>
    </div>
)

export default FormField;
