import "bulma/css/bulma.css";
import "./FormField.css";
import React from "react";

const FormField = (props) => {
  return (
    <div className="container input-size">
      <label className="field label">
        {props.label}
        <input
          className="input"
          type={props.type}
          placeholder={props.placeholder}
        />
      </label>
    </div>
  );
};

export default FormField;
