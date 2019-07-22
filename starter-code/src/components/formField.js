import React from 'react';


const FormField = (props) => {
  return (
    <div class="field">
        <label class="label">{props.label}</label>
        <div class="control">
        <input class="input" type={props.text} placeholder={props.placeholder}></input>
        </div>
    </div>
    )
};

export default FormField;