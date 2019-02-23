import React from "react";

import "bulma/css/bulma.css";

export default class FormField extends React.Component {
  render() {
    
    const { type, label, placeholder } = this.props;

    return (
      <div className="field">
        <label className="label">{label}</label>

        <div className="control">
          <input
            type={type}
            className="input"
            placeholder={placeholder}
          />
        </div>
      </div>
    );
  }
}

