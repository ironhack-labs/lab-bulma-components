import React, { Component } from 'react'

export default class CoolButton extends Component {
  constructor(props) {
    super()
  }
  render() {
    return (
      <div>
        <button className={"button "+ this.props.btn}>{this.props.children}</button>
      </div>
    )
  }
}
