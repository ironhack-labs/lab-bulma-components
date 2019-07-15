import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
       
      <button className={'button ' + this.props.miriam}>{this.props.children}</button>

      </div>
    )
  }
}

