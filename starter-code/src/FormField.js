import React, { Component } from "react";
import "bulma/css/bulma.css";

class FormField extends Component {
  render() {
    return (
      <div className="formField">
        <div className="field">
          <label className="label">{this.props.label}</label>
          <div className="control">
            <input className="input" type={this.props.type} placeholder={this.props.placeholder} />
          </div>
          <br/>
        </div>
      </div>
    );
  }
}

export default FormField;
