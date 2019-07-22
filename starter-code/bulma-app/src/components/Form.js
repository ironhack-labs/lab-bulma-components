import React, { Component } from "react";
import "../App.css";
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: this.props.label,
      type: this.props.type,
      placeholder: this.props.placeholder
    };
  }

  render() {
    return (
      <div className="form">
        <div class="field">
          <label class="label">{this.state.label}</label>
          <div class="control">
            <input
              class="input"
              type={this.state.type}
              placeholder={this.state.placeholder}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
