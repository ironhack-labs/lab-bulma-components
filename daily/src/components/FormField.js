import React from "react";
const FormField = props => {
  return (
    <div>
      <label>{props.label}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        class="input is-primary"
      />
    </div>
  );
};
export default FormField;
