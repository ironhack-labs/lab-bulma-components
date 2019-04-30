import React, { Component } from 'react'
import checkAttribute from "../helper/checkAttribute"

export default class CoolButton extends Component {
    render() {
    return (
      <div>  
        <button className={checkAttribute('button', this.props)}>{this.props.children}</button>
      </div>
    )
  }
}
