import 'bulma/css/bulma.css';
import React, { Component } from "react";


const FormField = props => {
    return (
        <div className='field'>
        <label className='label'>{props.label}</label>
        <div class="control">
          <input class={props.label} type={props.type} placeholder={props.placeholder} />
        </div>
      </div>
    )
}

export default FormField;