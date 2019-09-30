import React, { Component } from "react";

export default class FormField extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <button className={this.props.class}></button>
    );
  }
}
