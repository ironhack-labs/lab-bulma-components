import React from "react";
import "bulma/css/bulma.css";
import CoolButton from "../CoolButton/CoolButton";

function FormField(props) {
  return (
    <div className={props.field}>
      <label className={props.label}>{props.children}</label>
      <div className={props.controls}>
        <input
          className={props.input}
          type={props.type}
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
}

export default FormField;
