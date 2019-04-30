import React, { Component } from "react";

const FormField = (props)=>{
  return(
    <div>
          <div className="field">
            <label className="label">{props.name}</label>
            <div className="control">
             <input className="input" type={props.type} placeholder={props.placeholder}/>
            </div>
          </div>
    </div>
  )
}

export default FormField;