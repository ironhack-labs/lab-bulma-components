import React, { Component } from "react";

export default class CoolButton extends Component {
  render() {
    return (
      <div>
        <button className="button is-small is-success">Login</button>
        <button className="button is-small is-danger">Signup</button>
      </div>
    );
  }
}
