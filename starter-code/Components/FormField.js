import React, { Component } from "react";

export default class FormField extends Component {
  render() {
    return (
      <div>
        <label className="label">{this.props.label}</label>
        <input className="input" placeholder={this.props.placeholder} type={this.props.type}>{this.props.name}</input>
      </div>
    );
  }
}
