import React, { Component } from "react";

class Message extends Component {
  render() {
    const { title, isPrimary, isInfo } = this.props;
    let compo = "message";
    if (isPrimary) {
      compo += " is-danger";
    } else if (isInfo) {
      compo += " is-info";
    }
    return (
      <article className={compo}>
        <div className="message-header">
          <p>{title}</p>
          <button className="delete" aria-label="delete" />
        </div>
        <div className="message-body">{this.props.children}</div>
      </article>
    );
  }
}
export default Message;
