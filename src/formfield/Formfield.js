import React from 'react';



const FormField = props => {
    return (
      <div className='field'>
        <label className='label'>{props.label}</label>
        <input type={props.type} placeholder={props.placeholder}></input>
      </div>
    );
  };

  

export default FormField;