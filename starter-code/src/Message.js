import React, { Component } from "react";

class Message extends Component {
  render() {
    const { title } = this.props;
    const { message } = this.props;

    return (
      <article className="message is-info">
        <div className="message-header">
          <p>{title}</p>
          <button className="delete" aria-label="delete" />
        </div>
        <div className="message-body">{message}</div>
      </article>
    );
  }
}

export default Message;
