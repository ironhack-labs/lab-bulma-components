import React, { Component } from "react";

export default class coolButton extends Component {
  render() {
    return (
      <div>
        <button className="button is-rounded my-class is-danger is-small">
          Login
         </button>
        <button className="button is-small is-success">SignUp</button>
        </div>
    );
  }
}
