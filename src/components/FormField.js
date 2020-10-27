import React from "react";
import "./FormField.css";
export default function FormField(props) {
  return (
    <div className="form">
      <br />
      <div className="field">
        <label className="label">{props.label}</label>
        <div className="control">
          <input
            className="input"
            type={props.type}
            placeholder={props.placeholder}
          />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}
