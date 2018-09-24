import React, { Component } from 'react';

import './App.css';

class FormField extends Component {
  render() {
    return (
   

<div class="field">
  <label class="label">{this.props.whatever}</label>
  <div class="control">
    <input class="input" type="text" placeholder="e.g Alex Smith"/>
  </div>
</div>



     
    );
  }
}

export default FormField;
