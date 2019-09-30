import React, { Component } from 'react'
import CoolButton from "./CoolButton"

export default class Message extends Component {
  render() {
    console.log(this.props)
    return (
        <article className={this.props.className}>
          <div className="message-header">
            <p>{this.props.title}</p>
          </div>
          <div className="message-body">
            <p>{this.props.children}</p>
          </div>
        </article>
    )
  }
}
