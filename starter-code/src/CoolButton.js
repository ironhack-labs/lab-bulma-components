import React, { Component } from "react";
import "./Nav.css";
import "bulma/css/bulma.css";

class CoolButton extends Component {
  // every component className needs a render() method
  render() {
    return (
      <div>
        <button class="button is-rounded my-class is-danger is-small">
          Button 1
        </button>
        <button class="button is-small is-success">Button 2</button>
      </div>
    );
  }
}

export default CoolButton;
