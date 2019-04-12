import React, { Component } from "react";

class FormField extends Component {
  render() {
    return (
      <div className="field">
        <label className="label">{this.props.label}</label>
        <input className={this.props.color} type={this.props.type} placeholder={this.props.placeholder} />
      </div>
    );
  }
}

export default FormField;
