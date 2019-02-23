import React, { Component } from "react";

class Message extends Component {
  render() {
    const { title, isPrimary, isInfo, messageText } = this.props;

    // Autres méthode
    // let compo = ['message'];
    // tab.push('is-info');
    // const classes = tab.join(" ");

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
        <div className="message-body">{messageText}</div>
      </article>
    );
  }
}
export default Message;
