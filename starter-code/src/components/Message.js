import React, { Component } from "react";

class Message extends Component {
  render() {
    return (
      <div className="container">
        <article class="message">
          <div class="message-header">
            <p>{this.props.title}</p>
            <button class="delete" aria-label="delete" />
          </div>
          <div class="message-body">{this.props.children}</div>
        </article>
      </div>
    );
  }
}

export default Message;
