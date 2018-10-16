import React, { Component } from "react";

class CoolButton extends Component {
  render() {
    // const {className} = this.props;
    // const isSmall = this.props.isSmall;
    // const isDanger = this.propos.isDanger;

    return (
      <button className={`${this.props.isSmall && "button is-primary" } ${this.props.isDanger && "button is-danger" } ${this.props.isLight && "button is-light" }`} >Button 1</button>
    )
  }
}

export default CoolButton;