import React, { Component } from "react";
import CoolButton from "./CoolButton";

export default class FormField extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input className="input" type="text" placeholder="e.g yourPAss" />
          </div>
        </div>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="e.g Alex Smith" />
          </div>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              type="email"
              placeholder="e.g. alexsmith@gmail.com"
            />
          </div>
        </div>
        <CoolButton></CoolButton>
      </div>
    )
  }
}
