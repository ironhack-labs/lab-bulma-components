import React, { Component } from "react";

export default class Form extends Component {
  render() {
    return (
      <div className="field">
        <label className="label">{this.props.label}</label>
        <input
          className="input"
          type={this.props.type}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}
