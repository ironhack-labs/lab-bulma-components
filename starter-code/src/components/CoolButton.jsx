import React, { Component } from "react";

class CoolButton extends Component {
  state = {};
  render() {
    return (
      <div className="buttons">
        <button className={`button ${this.props.className}`}>
          {this.props.children}
        </button>
      </div>
    );
  }
}

export default CoolButton;
