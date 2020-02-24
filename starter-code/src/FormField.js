import React from "react";

function FormField(props) {
  // var price = Math.round(Math.random() * 100)
  // let element = <h1>Hello, world!</h1>;
  return (
    <div className="field">
      <label className="label">{props.label}</label>
      <div className="control">
        <input className="input" type={props.type} placeholder={props.placeholder} />
      </div>
    </div>
  );
}

export default FormField;
