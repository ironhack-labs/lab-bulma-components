import React from 'react'
import './FormField.css'
import 'bulma/css/bulma.css';

const FormField = (props) => {
    return (
      <div className='Formfield'>
        <label className='label'>{props.label}</label>
        <input type={props.type} name={props.label} placeholder={props.placeholder}/>
      </div>
    );
  };

export default FormField;