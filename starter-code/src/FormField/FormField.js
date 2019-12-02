import React, { Component } from "react";
import "./FormField.css"

export default class FormField extends Component {
  render() {
    return (
      <div className="formFieldContainer">
        <label className="label">{this.props.label}</label>
        <div className="control">
          <input className="input" type="text" placeholder={this.props.buttonPlaceholder} />
        </div>
      </div>
    );
  }
}
