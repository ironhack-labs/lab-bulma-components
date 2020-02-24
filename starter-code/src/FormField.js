import React from 'react';
import "./FormField.css";

function FormField() {
  return (
    <div>
      {/* FORM FIELD 1 */}
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="e.g Alex Smith" />
        </div>
      </div>
      {/* FORM FIELD 2 */}
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
        </div>
      </div>      
    </div>
  )
}

export default FormField;
