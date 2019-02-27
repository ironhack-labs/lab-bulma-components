import React,  { Component } from "react";
import bulmaClasses from "../constants"

export default class CoolButton extends Component {

  constructor (props) {
    super(props)
  }

  render() {
    
    const classes = () => Object.keys(this.props)
      .map(prop => bulmaClasses[prop] || "")
      .join(" ");

    return (
      <button className={`button my-class ${classes()}`}>{this.props.children}</button>
    )
  }
}