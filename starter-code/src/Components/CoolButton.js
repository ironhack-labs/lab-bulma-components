import React, { Component } from "react";

class CoolButton extends Component {
  render() {
    const { isSuccess, isDanger, isPrimary } = this.props
    let stringClass = ''
    const btnStr = this.props.children

    if (isSuccess) {
      stringClass = "is-succes";
    } else if (isDanger) {
      stringClass = "is-danger";
    } else if (isPrimary) {
      stringClass = "is-primary";
    }

    return (
      <button className={`button ${stringClass}`}> {btnStr} </button>

    )
  }
}

export default CoolButton;

