import React, { Component } from "react";


function FormField (props) {
    return (
      <div className="field">
        <label className="label">{props.label}</label>
        <div className="control">
          <input className="input" type={props.type} placeholder={props.placeholder} name = {props.label}/>
        </div>
      </div>
    )
}

export default FormField;