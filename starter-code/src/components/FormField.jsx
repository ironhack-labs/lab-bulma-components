/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const FormField = (props) => (
  <div className="field">
    <label className="label">{props.label}</label>
    <div className="control">
      <input className="input" type={props.type} placeholder={props.placeholder} />
    </div>
  </div>
);

export default FormField;
