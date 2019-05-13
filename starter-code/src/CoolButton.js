import React from "react";

class CoolButton extends React.Component {
  render() {
    return (
      <div>
        <button class="button is-link is-medium inverted">Login</button>
        <button class="button is-link is-medium">
          Sign Up
        </button>
      </div>
    );
  }
}

export default CoolButton;
