import React, { Component } from "react";

class FormField extends Component {
  render() {
    const { label, type, placeholder } = this.props;

    return (
      <div>
        <div className="field">
          <label className="label">{label}</label>
          <div className="control">
            <input className="input" type={type} placeholder={placeholder} />
          </div>
        </div>
      </div>
    );
  }
}

// export your component CLASS so that you can display in other files
export default FormField;
