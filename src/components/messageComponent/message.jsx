import React from "react";
import "./message.css";

class Message extends React.Component {
  render() {
    return (
      <div>
        <article className="message">
          <div className="message-header">
            <p>{this.props.title}</p>
            <button className="delete" aria-label="delete"></button>
          </div>
          <div className="message-body">{this.props.children}</div>
        </article>
      </div>
    );
  }
}

export default Message;
