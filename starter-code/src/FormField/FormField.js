import React from "react";

export default class FormField extends React.Component {
  render() {
    return (
      <div class="field form" style={{width: 400, height: 75}}>
        <label class="label">{this.props.label}</label>
        <div class="control">
          <input
            class="input"
            type={this.props.type}
            placeholder={this.props.placeholder}
          ></input>
        </div>
      </div>
    );
  }
}
