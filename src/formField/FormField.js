import React from 'react';
import 'bulma/css/bulma.css';

const FormField = (props) => {
  return (
    <div className="form">
      <div className="field">
        <label className="label">{props.label}</label>
        <div className="control">
          <input className="input" type={props.type} placeholder="Name">{props.input}</input>
        </div>
      </div>
    </div>
  );
};

export default FormField;
