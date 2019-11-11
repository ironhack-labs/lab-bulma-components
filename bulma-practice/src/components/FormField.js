import React, { Component } from "react";
class FormField extends Component {
  render() {
    return (
      <div className="field">
        {/* <label className="label">Name</label>
        <div className="control">
          <input
            className="input"
            type={this.props.type}
            placeholder="e.g Alex Smith"
          />
        </div>
        <label className="label">Email</label>
        <div className="control">
          <input
            className="input"
            type={this.props.type}
            placeholder='alex@gmail.com'
          />
        </div> */}
        
        <label className="label">{this.props.label}</label>
        <div className="control">
          <input
            className="input"
            type={this.props.type}
            placeholder={this.props.placeholder}
          />
        </div>
      </div>
    );
  }
}

export default FormField;
