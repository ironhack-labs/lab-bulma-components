import React, { Component } from 'react';


class Message extends Component {
  render() {
    return (
      <article class="message is-info">
        <div class="message-header">
          <p>{this.props.title}</p>
          <button class="delete" aria-label="delete"></button>
        </div>
        <div class={this.props.className}>
        {this.props.children}
        </div>
      </article>
    )
  }
}

export default Message;