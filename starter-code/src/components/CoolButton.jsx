import React, { Component } from "react";

export default class CoolButton extends Component {
  state = {};
  render() {
    let classes = "button is-rounded my-class is-small " + this.props.classes;
    return <button class={classes}>{this.props.label}</button>;
  }
}
//is-primary, is-success, is-danger.
