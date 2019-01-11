import React, { Component } from "react";
import "bulma/css/bulma.css";

class CoolButton extends Component {
  render() {
    return (
      <button className={this.props.className}>
        Button 1
      </button>
    );
  }
}

export default CoolButton;
