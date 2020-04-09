import React, { Component } from "react";
import "bulma/css/bulma.css";

class CoolButton extends Component {
  render() {
    const { styleClass, type, value } = this.props;
    return <input class={styleClass} type={type} value={value}></input>;
  }
}
export default CoolButton;
