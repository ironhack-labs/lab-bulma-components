import React, { Component } from "react";

class CoolButton extends Component {
  render() {
    return <button className={"button "+ this.props.bclas}>{this.props.name}</button>
  }
}

export default CoolButton