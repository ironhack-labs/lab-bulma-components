import React from "react";

const FormField = props => {
  return (
    <div className="field">
      <label className="label">{props.label}</label>
      <div class="field">
        {/* <label class="label">Name</label> */}
        <div class="control">
          <input class="input" type="text" placeholder="e.g Alex Smith" />
        </div>
      </div>
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input
            class="input"
            type="email"
            placeholder="e.g. alexsmith@gmail.com"
          />
        </div>
      </div>
    </div>
  );
};

export default FormField;
