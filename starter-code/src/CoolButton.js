import React, { Component } from "react";

class CoolButton extends Component {
  render() {
    return (<button class={this.props.className}>{this.props.children}</button>)
  }
}

export default CoolButton;