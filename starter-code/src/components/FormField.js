import React, { Component } from "react";

class FormField extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { label, type, placeholder } = this.props;

    return(
      <div className="field">
        <label className="label">{label}</label>
      <div className="control">
        <input className="input" type={type} placeholder={placeholder} />
      </div>
    </div>
    )
  }
}

export default FormField;