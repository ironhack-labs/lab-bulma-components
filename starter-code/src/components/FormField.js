import React, { Component } from "react";

export default class FormField extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="field">
      <label className="label">{this.props.label}</label>
      <div class="control">
        <input className="input" type="text" placeholder={this.props.placeholder}/>
      </div>
    </div>
    );
  }
}
