import React, { Fragment } from 'react';

const FormField = ({ label, type, placeholder }) => {
  return (
    <Fragment>
      <div className="field">
        <label className="label">{label}</label>
        <div className="control">
          <input className="input" type={type} placeholder={placeholder}/>
        </div>
      </div>
    </Fragment>
  );
}

export default FormField;
