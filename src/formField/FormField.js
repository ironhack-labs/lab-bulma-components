import "bulma/css/bulma.css";
import React, { Component } from "react";

export default class FormField extends Component {
  render() {
    return (
      <div className="field">
        <label className="label">{this.props.label}</label>
        <div className="control">
          <input className="input" type="text" placeholder={this.props.placeholder} />
        </div>
      </div>
    );
  }
}
