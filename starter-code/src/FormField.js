//FormField.js
import React, { Component } from "react";

const FormField = props => {
  console.log(props.name);
  return (
    <div>
      <div className="field">
        <label className="label">{props.name}</label>
        <div className="control">
          <input
            className="input"
            type={props.type}
            placeholder={props.placeHolder}
          />
        </div>
      </div>
    </div>
  );
};

export default FormField;
