import React from "react";
import "bulma/css/bulma.css";
import "./FormField.css";

function FormField(props) {
  return (
    <div className="form-size">
      <div className="field">
        <label className="label">{props.label}</label>
        <div className="control">
          <input
            className="input"
            type={props.type}
            placeholder={props.placeholder}
          ></input>
        </div>
      </div>
    </div>
  );
}

export default FormField;
