import React, { Component } from "react";

class CoolButton extends Component {
  render() {
    return (
      <div className="Buttons">
        <button className="button is-rounded my-class is-danger">LogIn</button>
        <button className="button is-success">Signup</button>
      </div>
    );
  }
}
export default CoolButton;
