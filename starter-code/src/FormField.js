import React, { Component } from "react";
import "bulma/css/bulma.css";

class FormField extends Component {
  render() {
    const { type, placeholder } = this.props;
    return (
      <div>
        <div className="field">
          <label className="label">{this.props.children}</label>
          <div className="control">
            <input className="input" type={type} placeholder={placeholder} />
          </div>
        </div>
      </div>
    );
  }
}

export default FormField;
