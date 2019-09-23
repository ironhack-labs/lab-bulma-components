import React from "react";
import "bulma/css/bulma.css";

const Signup = props => {
  return (
    <div className="field">
      <label className="label">{props.data.label}</label>
      <div className="control">
        <input
          className="input"
          type={props.data.type}
          placeholder={props.data.placeholder}
        />
      </div>
    </div>
  );
};

export default Signup;
