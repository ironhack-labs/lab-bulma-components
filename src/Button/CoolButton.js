import React, { Component } from "react";
import "bulma/css/bulma.css";

class CoolButton extends Component {
  render() {
    return <button className={this.props.className}>Send</button>;
  }
}

export default CoolButton;
