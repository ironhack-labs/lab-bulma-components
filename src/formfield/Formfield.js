import React, { Component } from 'react'
import 'bulma/css/bulma.css'

const FormField = props => {
    return (
      <div className='field'>
        <label className='label'>{props.label}</label>
        <div className="control">
        <input className="input" type={props.type} placeholder={props.placeholder}></input>
      </div>
      </div>
    );
  }

export default FormField