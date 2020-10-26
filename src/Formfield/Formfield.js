import React from "react";

export default function Formfield(props) {
  return (
    <div className="field">
      <label className="label">{props.label}</label>
      <div className="control">
        <input className="input" type="text" placeholder={props.text} />
      </div>
    </div>
  );
}
