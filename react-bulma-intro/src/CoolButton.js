import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";

class CoolButton extends Component {
  render() {
    return (
        <button className={this.props.className} style={{ color: this.props.color }}>{this.props.children}</button>
    );
  }
}

export default CoolButton;
