import React from "react";
import "bulma/css/bulma.css";
import "./FormField.css";

function FormField(props) {
  return (
    <div class="form-size">
      <div class="field">
        <label class="label">{props.label}</label>
        <div class="control">
          <input
            class="input"
            type={props.type}
            placeholder={props.placeholder}
          ></input>
        </div>
      </div>
    </div>
  );
}

export default FormField;
