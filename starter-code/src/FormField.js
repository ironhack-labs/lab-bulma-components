import React from 'react';
import "./FormField.css";

function FormField() {
  return (
    <div>
      {/* FORM FIELD 1 */}
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input className="input" type="text" placeholder="e.g Alex Smith" />
        </div>
      </div>
      {/* FORM FIELD 2 */}
      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
        </div>
      </div>      
    </div>
  )
}

export default FormField;
