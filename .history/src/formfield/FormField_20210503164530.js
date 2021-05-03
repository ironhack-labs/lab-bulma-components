import React from "react";
import "./FormField.css";
import "bulma/css/bulma.css";
import Navbar from "../navbar/Navbar";

function FormField({labelTag, type, placeholder}) {
  return (
    <div>
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" type="text" placeholder={placeholder} />
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
}

export default FormField;
