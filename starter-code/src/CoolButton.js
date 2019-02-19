import React, { Component } from "react";
import "./App.css";

class CoolButton extends Component {
  render() {
    return (
      <button className={this.props.className}>{this.props.value}</button>
    )
  }
}

export default CoolButton;