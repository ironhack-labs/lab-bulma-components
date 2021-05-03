import React from "react";
import 'bulma/css/bulma.css';
import "./FormField.css";

const FormField= props =>{
  return(
<div className="formfield">
  <div className="field">
      <label className="label">{props.label}</label>
        <div className="control">
        <input className="input" type="text" placeholder="e.g Alex Smith" />
    </div>
  </div>
    <div className="field">
      <label className="label">{props.label}</label>
        <div className="control">
        <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
    </div>
  </div>
</div>
  )
}

export default FormField;
