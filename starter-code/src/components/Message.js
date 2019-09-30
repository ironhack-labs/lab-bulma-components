import React, { Component } from 'react'

export default class Message extends Component {
  constructor(props) {
    super()
  }
  render() {
    return (
      <article className="message is-info">
      <div className="message-header">
        <p>{this.props.title}</p>
        <button className="delete" aria-label="delete"></button>
      </div>
      <div className="message-body">
        {this.props.children}
      </div>
    </article>
    )
  }
}
