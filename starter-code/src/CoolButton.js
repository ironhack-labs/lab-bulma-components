import React from "react";
import "./CoolButton.css";
class CoolButtons extends React.Component {
  render() {
    return (
      <div id="CoolButton" className="field">
        <button className="button is-rounded my-class is-danger is-small">
          Login
        </button>
        <button className="button is-small is-success">Signup</button>
      </div>
    );
  }
}

export default CoolButtons;
