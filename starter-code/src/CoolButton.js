import React, { Component } from "react";

class CoolButton extends Component {
 
  render() {
    //console.log(this.props);
    let strClass = "button ";
    strClass += this.props.isSmall ? "is-small " : "";
    strClass += this.props.isDanger ? "is-danger " : "";
    strClass += this.props.isSuccess ? "is-success " : "";
    strClass += this.props.className;
    //console.log(strClass)
    return <button className={strClass} onClick={this.props.click}>{this.props.children}</button>;
  }
}

export default CoolButton;