import React from "react";
import "bulma/css/bulma.css";
import "./FormField.css"

const FormField = (props) => {
 
  return (
       <div className="field form">
           <label className="label">{props.label}</label>
      <div className="control">
        <input className="input" type="text" placeholder={props.placeholder} />
      </div>
    </div>
  );
};

export default FormField;