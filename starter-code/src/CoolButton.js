import React, { Component } from "react";

class CoolButton extends Component {

  render() {
    const { className, isSmall, isDanger, isSuccess, isPrimary, isInfo } = this.props;

    let cssClasses = "button";
    if (className) {
      cssClasses = cssClasses + " " + className;
    }
    if (isSmall) {
      cssClasses += " is-small";
    }
    if (isDanger) {
      cssClasses += " is-danger";
    } else if (isSuccess) {
      cssClasses += " is-success";
    } else if (isPrimary) {
      cssClasses += " is-primary";
    } else if (isInfo) {
      cssClasses += " is-info";
    }

    return (
      <button className={cssClasses}>{this.props.children}</button>
      )
  }
}

export default CoolButton;