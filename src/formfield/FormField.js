import React from "react";
import "bulma/css/bulma.css";

function FormField(props) {
  return (
    <div class={props.field}>
      <label class={props.label}>{props.children}</label>
      <div class={props.controls}>
        <input
          class={props.input}
          type={props.type}
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
}

export default FormField;