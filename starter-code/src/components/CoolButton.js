import React, { Component } from 'react'
import checkStyles from "./ClassNames"

export default class CoolButton extends Component {
  render() {
    return (
      <button className={checkStyles('button', this.props)}>{this.props.children}</button>
    )
  }
}
