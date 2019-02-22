import React, { Component } from "react";

class CoolButton extends Component {
  render() {
    const {
      className,
      isDanger,
      isSuccess,
      isSmall,
      isPrimary,
      isInfo
    } = this.props;

    let compoCSS = "button " + className;

    if (isSmall) {
      compoCSS += " is-small";
    }
    if (isDanger) {
      compoCSS += " is-danger";
    } else if (isSuccess) {
      compoCSS += " is-success";
    } else if (isPrimary) {
      compoCSS += " is-primary";
    } else if (isInfo) {
      compoCSS += " is-info";
    }
    return <button className={compoCSS}>{this.props.children}</button>;
  }
}

export default CoolButton;
