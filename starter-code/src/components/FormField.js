import React from "react";

const FormField = ({label, type, placeHolder}) => (
  <div className="field">
    <label className="label">{label} </label>
    <div>
      <input className="input" type={type} placeholder={placeHolder}/>
    </div>
  </div>
)

export default FormField;