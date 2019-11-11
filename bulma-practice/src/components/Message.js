import React, { Component } from "react";
class Message extends Component {
  render() {
    return (
      <article className="message is-info">
        <div className="message-header">
          {this.props.title}
          <button className="delete" aria-label="delete" />
        </div>
        <div className="message-body">{this.props.children}</div>
      </article>
    );
  }
}
export default Message;
