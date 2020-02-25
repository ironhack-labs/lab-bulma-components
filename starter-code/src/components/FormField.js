import React from "react";

function FormField(props) {
  const { labelName, typeName, placeholderText } = props;

  return (
    <div className="field">
      <label className="label">{labelName}</label>
      <div className="control">
        <input
          className="input"
          type={typeName}
          placeholder={placeholderText}
        />
      </div>
    </div>
  );
}

export default FormField;
