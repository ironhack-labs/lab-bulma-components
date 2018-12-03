import React, { Component } from "react";

class CoolButton extends Component {
  render() {
    return (
      <div>
      <button className="button is-rounded my-class is-danger is-small">Log in </button>
      <button className="button is-small is-success">Sign up</button>
      </div>
    );
  }
}

export default CoolButton;