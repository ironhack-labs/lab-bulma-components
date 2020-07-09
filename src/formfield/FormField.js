import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import './FormField.css'

const FormField = props => {
    return (
      <div className='field'>
        <label className='label'>{props.label}</label>
        <div class="control">
            <input className="input" type="text" placeholder="e.g Alex Smith" />
        </div>
      </div>
    );
  };

  export default FormField