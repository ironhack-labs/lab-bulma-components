import React from "react";
import "./Formfield.css";

export default function Formfield(props) {
  return (
    <div className="Form-Container">
      <label className="label"> {props.label}</label>
      <input
        className="input"
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
}
