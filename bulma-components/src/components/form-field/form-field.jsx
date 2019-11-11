import './form-field.css'
import React from "react";
// ^ this is always needed for any react components

class FormField extends React.Component {
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