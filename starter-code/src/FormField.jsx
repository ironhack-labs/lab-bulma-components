import React from "react";

const FormField = (props) => {
  return (
    <React.Fragment>
      <div className="field">
        <label className="label">{props.label}</label>
        <div className="control">
          <input
            className="input"
            type={props.type}
            placeholder={props.placeholder}
          ></input>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FormField;