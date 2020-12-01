import React from "react";
import "./FormField.css";
import 'bulma/css/bulma.css';

function FormField (props) {
    return (
        <form>
<div className="field">
  <label className="label">{props.label}</label>
  <div className="control">
    <input className="input" type="text" placeholder="e.g Alex Smith" />
  </div>
</div>
</form>
    )
}
export default FormField;