import React from "react";
const Formfield = props => {
  console.log(props);
  return (
    <div>
      <div className="field">
        <label className="label">{props.label}</label>
        <div className="control">
          <input
            name={props.name}
            className="input"
            type="text"
            placeholder="e.g Alex Smith"
          />
        </div>
      </div>
    </div>
  );
};

export default Formfield;
