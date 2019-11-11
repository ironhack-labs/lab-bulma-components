import "./form.css";
import React from "react";

class FormField extends React.Component {
  render() {
    return (
      <div className="field">
      <form>

        <label className="label">{this.props.label}</label>
        <div className="control">
          <input
            className="input"
            label={this.props.label}
            name={this.props.name}
            type={this.props.type}
            placeholder={this.props.placeholder}
          />
        </div>
      </form>
      </div>
    );
  }
}

export default FormField;
