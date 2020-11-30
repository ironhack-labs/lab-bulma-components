import React from "react";
import "bulma/css/bulma.css";

function FormField(props) {
  return (
    <div class="field">
      <label class="label">{props.label}</label>

      <div class="control">
        <input
          class="input is-primary"
          type={props.type}
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
}

export default FormField;
