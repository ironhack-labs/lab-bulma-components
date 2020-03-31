import React from "react";
import "bulma/css/bulma.css";


export const FormField = props => {
  return (
    <div className="field">
      <label className="label">{props.name}</label>
      <div className="control">
        <input className="input" type={props.text} placeholder={props.placeholder} />
      </div>
    </div>
  )
}
