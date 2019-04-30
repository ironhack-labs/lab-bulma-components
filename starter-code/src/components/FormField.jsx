import React, { Component } from "react";

export default class FormField extends Component {
  render() {
    return (
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input className="input" type="text" placeholder="e.g Alex Smith" />
        </div>
      </div>
    );
  }
}
