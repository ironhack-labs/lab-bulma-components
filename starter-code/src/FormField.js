import React, { Component } from "react";

class FormField extends Component {
  render() {
    let { label, type, placeholder } = this.props;
    return (
      <div className="form">
        <div className="field">
          <label className="label">{label}</label>
          <div className="control">
            <input className="input" type={type} placeholder={placeholder} />
          </div>
        </div>
      </div>
    );
  }
}

export default FormField;
