import React, { Component } from "react";

class FormField extends Component {
  render() {
    return (
      <div className="formfield">
        <label className="label">{this.props.label}</label>
        <div className="control">
        <input className="input" type={this.props.label} placeholder={this.props.placeholder} />
        </div>
      </div>
    );
  }
}

/* 
const FormField ({ label, type, placeholder }) => {
  return (
    <div className="formfield">
      <label className="label">{label}</label>
      <div className="control">
      <input className="input" type={label} placeholder={placeholder} />
      </div>
    </div>
  )
} */

export default FormField;
