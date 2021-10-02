import React from "react";
import "bulma/css/bulma.css";

const FormField = (props) => {
  return (
    <div class="field">
      <label class="label">{props.label}</label>
      <div class="control">
        <input class="input" type="text" placeholder={props.placeholder} />
      </div>
    </div>
  );
};

export default FormField;
