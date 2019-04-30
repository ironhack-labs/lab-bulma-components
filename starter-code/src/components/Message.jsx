import React, { Component } from 'react'
import checkAttribute from "../helper/checkAttribute"

export default class Message extends Component {
  render() {     
    return (
      <div className="messageBox">
        <article className={checkAttribute('message', this.props)}>
            <div className="message-header">
                <p>{this.props.title}</p>
                <button className="delete" aria-label="delete"></button>
            </div>
            <div className="message-body">{this.props.children}</div>
        </article>
      </div>
    )
  }
}

