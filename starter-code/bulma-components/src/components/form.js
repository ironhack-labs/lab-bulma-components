import React from "react";

const Formfield = props => {
  return (
    <>
      <div class="field" className="align-left">
        <label class="label">{props.label}</label>
        <div class="control">
          <input
            class="input"
            type={props.type}
            placeholder={props.placeholder}
          />
        </div>
      </div>
    </>
  );
};

export default Formfield;
