import React, { Component } from "react";

export default class CoolButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        
        <button class="button is-info">
          Login
        </button>
        <button class="button is-primary">
          Signup
        </button>
      </div>
    );
  }
}
