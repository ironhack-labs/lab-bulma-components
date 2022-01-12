import React, { Component } from 'react';
import "bulma/css/bulma.css";
 
const FormField = props => {
    return (
      <div className='field'>
        <label className='label'>{props.label}</label>
        // some other code goes here
      </div>
    );
  };
export default FormField;