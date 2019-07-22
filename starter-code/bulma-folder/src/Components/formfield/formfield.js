import React, { Component } from "react";
import "./formfield.css";
// import Nav from './Components/nav/nav'

class FormField extends Component {

  render() {
    return (
      <div className="App">
        <div class="field">
          <label class="label">{this.props.label}</label>
          <div class="control">
            <input class="input" type={this.props.type} placeholder={this.props.placeholder} />
          </div>
        </div>
      </div>
    );
  }
}

export default FormField;
