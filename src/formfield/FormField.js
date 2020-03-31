import React from "react";

const FormField = props => {
  return (
    <div>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input className="input" type="text" placeholder="e.g Alex Smith" />
        </div>
      </div>
      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input
            className="input"
            type="email"
            placeholder="e.g. alexsmith@gmail.com"
          />
        </div>
      </div>
    </div>
  );
};

export default FormField;
