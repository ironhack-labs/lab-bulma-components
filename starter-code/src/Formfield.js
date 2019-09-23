import React from "react";
import "bulma/css/bulma.css";
import "../public/style.css";


class FormField extends React.Component {
  render() {
    return (
      <div className="field">
        <label className="label">{this.props.label}</label>
        <div className="control">
          <input className="input"
            type={this.props.type}
            label={this.props.label}
            placeholder={this.props.placeholder}
          />
        </div>
      </div>
    );
  }
}

export default FormField;