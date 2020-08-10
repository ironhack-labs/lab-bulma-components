import React, { Fragment } from "react";

import "bulma/css/bulma.css";
import "./FormField.css";

const FormField = (props) => {
  const { label, type, placeholder } = props;
  return (
    <Fragment>
      <div className="field">
        <label className="label">{label}</label>
        <div className="control">
          <input className="input" type={type} placeholder={placeholder} />
        </div>
      </div>
    </Fragment>
  );
};

export default FormField;
