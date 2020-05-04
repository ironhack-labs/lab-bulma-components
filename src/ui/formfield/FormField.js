import React from "react";
import "bulma/css/bulma.css";

const FormField = ({name,type,placeholder}) => {
  return (
    <div className="field">
      <label className="label">{name}</label>
      <div className="control">
        <input className="input" type={type} placeholder={placeholder} />
      </div>
    </div>
  );
};

export default FormField;
