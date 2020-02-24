import React from "react";

export default function FormField(props) {
  return (
    <div classNameName="form-field">
      <div className="field">
        <label className="label">{props.label}</label>
        <div className="control">
          <input className="input" type="text" placeholder={props.placeholder} />
        </div>
      </div>
    </div>
  );
}
