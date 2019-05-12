import React, { Component } from "react";
import "./FormField.css";


class FormField extends Component {

  render() {
    return (
      <div className="FormField">
        <div className="field">
          <label className="label">{this.props.params.label}</label>
          <div className="control">
            <input className="input" type={this.props.params.type} placeholder={this.props.params.placeholder} />
          </div>
        </div>

      </div>
    );
  }
}

export default FormField;