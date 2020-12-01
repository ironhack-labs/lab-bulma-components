import React from "react";
import "bulma/css/bulma.css";

// const nameField = {
//   label: "Name",
//   type: "text",
// };

// const emailField = {
//   label: "Email",
//   type: "email",
// };

function FormField(props) {
  return (
    <div>
      <div className="field">
        <label className="label">{props.label}</label>
        <div className="control">
          <input
            className="input"
            type={props.type}
            placeholder={props.label}
          />
        </div>
      </div>
    </div>
  );
}

export default FormField;
