import React, { Component } from 'react'

export default class Message extends Component {
  render() {
    return (
      <article className={this.props.className} >
        <div className="message-header">
          <p>{this.props.title}</p>
        </div>
        <div className="message-body">
          {this.props.children}
        </div>
      </article>
    )
  }
}
