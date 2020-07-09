import React from 'react'
import './FormField.css'


const FormField = props => {
    return (
      <div className='field'>
        <label className='label'>{props.label}</label>
        <div className='control'>
        <input className='input is-primary is-' type={props.type} placeholder={props.placeholder} />
        </div>
      </div>
    );
  };


export default FormField