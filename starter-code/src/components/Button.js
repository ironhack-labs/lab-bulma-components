import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <div>
        <button class="button is-rounded my-class is-danger is-small pad">
Login        </button>
        <button class="button is-small is-success">Sign Up</button>
      </div>
    );
  }
}
