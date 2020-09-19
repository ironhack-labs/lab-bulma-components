import React from "react";

const FormField = (props) => {
  return (
    <div className='field'>
      <label className='label placeholder'>{props.label}</label>
      <input
        className='input'
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default FormField;
