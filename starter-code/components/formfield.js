import React from "react";

const formfield = (props) => {
    return (
        <div>
<div className="field">
  <label className="label">{props.varName}</label>
  <div className="control">
    <input className="input" type="text" placeholder="e.g Alex Smith"/>
  </div>
</div>
        </div>
    )
}

export default formfield;