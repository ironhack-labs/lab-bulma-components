import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class FormField extends Component {
  render() {
    return (
      <div class="field">
        {String(new Date())}
      <label class="label">{this.props.label}</label>
        <div class="control">
          <input class="input" type="text" placeholder={this.props.placeholder}/>
        </div>
      </div>

    );
  }
}


export default FormField;
