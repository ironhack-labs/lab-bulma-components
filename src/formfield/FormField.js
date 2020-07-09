import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import './FormField.css'

const FormField = props => {
    return (
      <div className='field'>
        <label className='label'>{props.label}</label>
        <div className="control has-icons-left">
            <input className="input" type="text" placeholder={props.placeholder} />
            <span className="icon is-small is-left">
                <i className={props.icon}></i>
            </span>
        </div>
      </div>
    );
  };

  export default FormField