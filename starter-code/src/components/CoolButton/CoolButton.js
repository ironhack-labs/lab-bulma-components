import React, { Component } from "react";

class CoolButton extends Component {
  render() {
    return (
      <div>
        <button class="button is-rounded is-danger is-small">Danger</button>
        <button class="button is-small is-success">Success</button>
        <button class="button is-small is-primary">Primary</button>
      </div>
    );
  }
}

export default CoolButton;
