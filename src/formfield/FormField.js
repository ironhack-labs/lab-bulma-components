import React from "react";


const FormField = (props) => {
  const { label, type, placeholder } = props;

  return (
    <div>
      <div className="field form__container">
        <label className="field">{label}</label>
        <div className="control">
          <input className="input" type={type} placeholder={placeholder} />
        </div>
      </div>
    </div>
  );
};

export default FormField;
