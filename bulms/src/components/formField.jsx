import React from "react";

export default class FormField extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.label}</h3>
        <input placeholder={this.props.placeholder} />
      </div>
    );
  }
}
