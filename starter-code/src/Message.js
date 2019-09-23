import React from "react";

class Message extends React.Component {
  render() {
    let temp = "";
    if (this.props.isInfo) {
      temp = "message is-link" + " is-info";
    }
    return (
      <article className={temp}>
        <div className="message-header">
          <p> {this.props.title}</p>
          <button className="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">{this.props.children}</div>
      </article>
    );
  }
}

export default Message;