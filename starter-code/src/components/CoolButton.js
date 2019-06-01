import React, { Component } from "react";
import "../App.css";
import buttons from "../constants/button.js";

class CoolButton extends Component {
  render () {
    let className = this.props.className;
    className = (this.props.className == undefined) ? '' : className;
    className += ' button';

    const propsKeys = Object.keys(this.props);

    propsKeys.map((key) => {
      className += (buttons[key]) ? ` ${buttons[key]}` : '';
    });

    return (
      <button className={className}>{this.props.children}</button>
    )
  }
}

export default CoolButton;