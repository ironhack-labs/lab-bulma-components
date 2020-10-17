import React from "react";
import "bulma/css/bulma.css";

export default function FormField(props) {
  return (
    <div>
      <div className="field">
        <label className="label">{props.name}</label>
        <div className="control">
          <input className="input" type="text" placeholder="e.g Alex Smith" />
        </div>
      </div>
    </div>
  );
}
