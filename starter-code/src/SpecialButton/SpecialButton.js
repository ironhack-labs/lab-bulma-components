import React, { Component } from "react";
import "./SpecialButton.css"

export default class SpecialButton extends Component {
    render() {
      return (
        <button className={this.props.color} id="specialButton">{this.props.buttonName}</button>
      );
    }
  }