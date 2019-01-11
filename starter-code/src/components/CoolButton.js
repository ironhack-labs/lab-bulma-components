import React, { Component } from "react";
import classNames from 'classnames/bind'
import styles from "../styles.js"


let cx = classNames.bind(styles);

export default class Button extends Component {
  render() {
    //here i'm not sure with the code to extract the classnames from the attributes, 
    let className = cx(
      'button',
      this.props,
      this.props.className);
    return (
      <a className={className}>{this.props.children}</a>
    )
  }
}