import React, { Component } from "react";

class CoolButton extends Component {
  render() {
    console.log(this.props);
    let className = "button";
    if (this.props.isSmall) {
      className += " is-small";
    }
    if (this.props.isSuccess) {
      className += " is-success";
    }
    if (this.props.isDanger) {
      className += " is-danger";
    }
    return (
      <button className={`${className} ${this.props.className}`}>
        {this.props.children}
      </button>
    );
  }
}

export default CoolButton;