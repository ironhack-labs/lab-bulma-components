import React, { Component } from "react";
import "bulma/css/bulma.css";

export default class FormField extends Component {
  render() {
    return (
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input className="input" type="text" placeholder={this.props.ph} />
        </div>
        <label className="label">Email</label>
        <div className="control">
          <input className="input" type="text" placeholder={this.props.ph} />
        </div>
      </div>
    );
  }
}
