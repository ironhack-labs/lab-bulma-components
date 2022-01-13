import React from "react";



const FormField = (props) => {
  return (
    <div className="field">
      <label className="label">{props.label}</label>
      <input
        className="input tamanho"
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default FormField;
