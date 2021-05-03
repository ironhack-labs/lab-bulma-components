import React from "react";
import "bulma/css/bulma.css";

const FormField = (props) =>{
    const { label, type, placeholder } = props;
    return(
    <div class="field">
    <label class="label">{label}</label>
    <div class="control">
      <input class="input" type={type} placeholder={placeholder}></input>
    </div>
  </div>
  )
}

export default FormField;