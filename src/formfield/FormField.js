import React from "react";
import "bulma/css/bulma.css";
import "./FormField.css"

const FormField = ({label, type, placeholder}) => {

  return (

    <div className="field">
     <div className="field-size">
      <label className="label">{label}</label>
      <div className="control">
        <input className="input" type={type} placeholder={placeholder} />
      </div>
      </div>
    </div>
  );
};

export default FormField;
