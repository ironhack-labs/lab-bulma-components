import React from "react";

function FormField(props) {
  return (
    <div className="field">
      <label className="label">{props.label}</label>
      <div className="control">
        <input className="input" placeholder={props.placeholder} type={props.type}/>
      </div>
    </div>
  );
}

export default FormField;
