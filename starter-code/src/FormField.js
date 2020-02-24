import React from "react";

function FormField(props) {
 const {label, type, placeholder}= props;
  return (
    <div>
      <div class="field">
        <label class="label">{label}</label>
        <div class="control">
          <input class="input" type={type} placeholder={placeholder} />
        </div>
      </div>
    </div>
  );
}

export default FormField;
