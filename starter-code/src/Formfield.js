import React from "react";

const formfield = (props) => {
  return (
    <div>
      <div className="field">
        <label className="label">{props.label}</label>
        <div className="control">
          <input className="input" type={props.type} placeholder={props.placeholder} />
        </div>
      </div>
    </div>
  );
};

export default formfield;
