import React, { Component } from 'react';
import '../formField/FormField.css'
import 'bulma/css/bulma.css';

function DinamicFormField(props){
  // console.log(props)
  const {label, className, type, placeholder} = props;
  return (
    <div className='FormField'>
      <div className="field">
        <label className="label">{label}</label>
        <div className="control">
          <input label={label} className={className} type={type} placeholder={placeholder}></input>
        </div>
      </div>
    </div>
    )
}

export default DinamicFormField