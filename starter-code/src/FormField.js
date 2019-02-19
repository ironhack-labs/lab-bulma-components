import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';

// eslint-disable-next-line react/prefer-stateless-function
class FormField extends Component {
  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div className="FormField">
       <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="e.g Alex Smith"/>
        </div>
      </div>

      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com"/>
        </div>
      </div>
      <button class="button is-small is-success">LogIn</button>
      </div>
    );
  }
}

export default FormField;
