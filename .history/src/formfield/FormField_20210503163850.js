import React from "react";
import "./FormField.css";
import "bulma/css/bulma.css";
import Navbar from "../navbar/Navbar";

function FormField({name, email}) {
  return (
    <div>
      <div class="field">
        <label class="label">{name.label}</label>
        <div class="control">
          <input class="input" type="text" placeholder="e.g Alex Smith" />
        </div>
      </div>
      <div class="field">
        <label class="label">{email.label}</label>
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
}

export default FormField;
