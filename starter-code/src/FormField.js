import React, { Component } from "react";
import "./Nav.css";
import "bulma/css/bulma.css";

class FormField extends Component {
  // every component className needs a render() method
  render() {
    const { label, type, placeholder } = this.props;
    return (
      <div>
        <div class="class">
          <label class={label}>Name</label>
          <div class="control">
            <input class="input" type={type} placeholder={placeholder} />
          </div>
        </div>
        <div class="field">
          <label class={label}>Email</label>
          <div class="control">
            <input class="input" type={type} placeholder={placeholder} />
          </div>
        </div>
      </div>
    );
  }
}

export default FormField;
