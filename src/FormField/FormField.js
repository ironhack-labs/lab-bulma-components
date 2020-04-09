import React from 'react';
import 'bulma/css/bulma.css';
import './FormField.css';

function FormField (props) {
  const { name, email } = props;
  return (
    <div className="form">
      <div className="field">
        <label className="label">{ name }</label>
        <div class="control">
          <input class="input" type="text" placeholder="e.g Alex Smith" />
        </div>
      </div>
      <div class="field">
        <label class="label">{email}</label>
        <div class="control">
          <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
        </div>
      </div>
    </div>
  );
};

export default FormField; 