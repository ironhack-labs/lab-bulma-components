import React, { Component } from "react";
import "bulma/css/bulma.css";

class FormField extends Component {
  render() {
    const { label, type, placeholder } = this.props;
    return (
      <div className="field">
        <label className="label">{label}</label>
        <div class="control">
          <input class="input" type={{ type }} placeholder={placeholder} />
        </div>
      </div>
    );
  }
}

export default FormField;
