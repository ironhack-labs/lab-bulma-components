import React, { Component } from "react";
import "./CoolButton.css";

export default class CoolButton extends Component {
  render() {
    return (
      <div>
        <button className="button is-rounded my-class is-danger is-small">
          Button 1
        </button>
        <button className="button is-small is-success">Button 2</button>
      </div>
    );
  }
}
