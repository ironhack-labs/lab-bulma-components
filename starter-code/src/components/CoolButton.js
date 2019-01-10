import React, { Component } from "react";

export default class FormField extends Component {
  render() {
    return (
      <a className="button">{this.props.children}</a>
    )
  }
}