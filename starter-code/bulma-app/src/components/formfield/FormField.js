import React from 'react';
import './formfield.css';

function FormField(props)  {

  return (
    <div className="FormField">
        <div className="field">
            <label>{props.label}</label>
            <input type={props.type} placeholder={props.placeholder}></input>
        </div>
    </div>
  );
  
}

export default FormField;
