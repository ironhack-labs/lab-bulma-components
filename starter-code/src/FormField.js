import React from "react";
//import "./FormField.css";

function FormField(props) {
  return (
    <section>
      <div class="field">
        <label class="label">{props.label}</label>
        <div class="control">
          <input class="input" type="text" placeholder="e.g Alex Smith" />
        </div>
      </div>
    </section>
  );
}

export default FormField;
