import React, { Component } from "react";

class FormField extends Component {
  render() {
    console.log(this.props);
    return (
      <div class="section">
        <div class="container is-fluid">
          <div class="field">
            <label class="label">{this.props.label}</label>
            <div class="control">
              <input
                class="input"
                type={this.props.type}
                placeholder={this.props.placeholder}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormField;
