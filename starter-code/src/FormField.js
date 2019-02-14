import React from "react";

const FormField = (props) => {
  return (
    <div>
      <div class="field">
        <label class="label">{props.label}</label>
      </div>
      <div class="control">
        <input class="input" type={props.type} placeholder={props.placeholder} />
      </div>
    </div>
  )
}

export default FormField;