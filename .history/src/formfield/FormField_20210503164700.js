import React from "react";
import "./FormField.css";
import "bulma/css/bulma.css";
import Navbar from "../navbar/Navbar";

function FormField({labelTag, type, placeholder}) {
  return (
    <div>
      <div class="field">
        <label class="label">{labelTag.label}</label>
        <div class="control">
          <input class="input" type={type} placeholder={placeholder} />
        </div>
      </div>
    </div>
  );
}

export default FormField;
