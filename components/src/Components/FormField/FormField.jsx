import React, { Component } from "react";
import "./FormField.css";
class FormField extends Component {
  render() {
    return (
      <div>
        <div className="field">
          <label className="label">{this.props.label}</label>
          <div className="control">
            <input className={this.props.input} type={this.props.type} placeholder={this.props.placeholder} />
          </div>
        </div>
      </div>
    );
  }
}

export default FormField;
