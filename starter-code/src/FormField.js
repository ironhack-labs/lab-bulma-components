import React, { Component } from "react";
import "bulma/css/bulma.css";

class FormField extends Component {
  render() {
    const { label, type, placeholder } = this.props;
    return (
      <div>
        <div className="field">
          <label className={label}>Name</label>
          <div className="control">
            <input className="input" type={type} placeholder={placeholder} />
          </div>
        </div>
      </div>
    );
  }
}

export default FormField;
