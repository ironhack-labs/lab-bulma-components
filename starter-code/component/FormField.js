import React from "react";
// JSX version
function FormField(props) {
    return (
        // What is rendered in the Web
        <div>
          <div className="field">
            <label className="label">{props.label}</label>
            <div className="control">
              <input className="input" type={props.type} placeholder={props.placeholder} />
            </div>
          </div>
        </div>
    );
  }



export default FormField;