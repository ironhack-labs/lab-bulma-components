import React from "react";

class CoolButton extends React.Component {
  render() {
    return (
      <div>
        <button class="button is-rounded my-class is-danger is-small">
          Cancel
        </button>
        <button class="button is-small is-success">Submit</button>
      </div>
    );
  }
}

export default CoolButton;
