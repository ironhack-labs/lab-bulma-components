import React from "react";

function FormField({ label, type, placeholder }) {
  return (
    <div>
      <div className="field">
        <label>{label}</label>
        <div className="control">
          <input className="input" type={type} placeholder={placeholder} />
        </div>
      </div>
    </div>
  );
}

export default FormField;
