import React, { Component } from "react";

class CoolButton extends Component {
  render() {
    return (
      <div>
        <button className="button is-primary is-danger">Log In</button>
        <button className="button is-primary is-success">Sign Up</button>
      </div>
    );
  }
}

// export your component CLASS so that you can display in other files
export default CoolButton;
