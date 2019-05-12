import React, { Component } from "react";
import "./CoolButton.css";

class CoolButton extends Component {
  render() {
    return (
      <div className="CoolButton">
        <a className={this.props.className}>Submit</a>
      </div>
    );
  }
}

export default CoolButton;