import React, { Component } from "react";

export default class FormField extends Component {
  render() {
    return (
      <form className="form">
        <div className="field">
          <label className="label">{this.props.label}</label>
          <div className="control">
            <input className="input" type={this.props.type} placeholder={this.props.placeholder}/>
          </div>
        </div>
      </form>
    );
  }
}
