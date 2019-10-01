import React, { Component } from "react";

export default class FormField extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="field">
          <label className="label">{this.props.label}</label>
          <div className="control">
            <input className="input" type={this.props.type} placeholder={this.props.placeholder} />
          </div>
        </div>
        {/* <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              type="email"
              placeholder="e.g. alexsmith@gmail.com"
            />
          </div>
        </div> */}
      </div>
    );
  }
}
