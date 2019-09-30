import React, { Component } from 'react'

export default class CoolButton extends Component {
  render() {
    console.log(this)
    return (
      <div>
        <button className={this.props.className}>{this.props.children}</button>
      </div>
    )
  }
}
