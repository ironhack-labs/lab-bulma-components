import React from "react";
import "./FormField.css";

const FormField = (props) => {
  return (
    <div className="field" className="container">
      <label className="label">{props.label}</label>
      <div className="control">
        <input className="input" type="text" placeholder={props.placeholder}></input>
      </div>
    </div>
  );
};
export default FormField;
