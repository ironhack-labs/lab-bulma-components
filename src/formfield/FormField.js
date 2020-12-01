import React from "react";
import "bulma/css/bulma.css";

const FormField = ({ label, type, placeholder }) => {
  return (
    <div className="field">
      <label className="label">{label}</label>
      <input placeholder={placeholder} type={type}></input>
    </div>
  );
};

export default FormField;
