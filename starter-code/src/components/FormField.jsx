import React, { Component } from "react";

class FormField extends Component {
  // constructor(props) {
  //   super(props);
  //   this.props = props;
  // }
  render() {
    return (
      <div className="field">
        <label className="label">{this.props.label}</label>
        <div className="control">
          <input className="input" type={this.props.type} placeholder={this.props.placeholder} />
        </div>
      </div>
    );
  }
}

export default FormField;
