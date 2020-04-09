import React from 'react';
import 'bulma/css/bulma.css';
import './FormField.css';


const FormField = props => {
    return (
      <div className='field'>
        <label className='label'>{props.label}</label>
        <input type={props.type} placeholder={props.placeholder}></input>
      </div>
    );
  };

export default FormField; 