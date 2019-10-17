import React, { Component } from "react";
import "bulma/css/bulma.css";

export default class FormField extends Component {
  render() {
    return (
      <div className="field">
        <label className="label">{this.props.name}</label>
        <div className="control">
          <input
            className="input"
            type={this.props.type}
            placeholder={this.props.ph}
          />
        </div>
      </div>
    );
  }
}
