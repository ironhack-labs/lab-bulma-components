import React, { Component } from "react";

export default class FormField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="field">
        <label className="label">{this.props.label}</label>
        <div className="control">
          <input
            type={this.props.type}
            className="input"
            name={this.props.name}
            placeholder={this.props.placeholder}
          />
        </div>
      </div>
    );
  }
}
