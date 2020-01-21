import React, { Component } from "react";

class Message extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    let allMessages = {
      isDark: 'is-dark',
      isPrimary: 'is-primary',
      isLink: 'is-link',
      isInfo: 'is-info',
      isSuccess: 'is-success',
      isWarning: 'is-warning',
      isDanger: 'is-danger',
    }

    const allClassesKeys = Object.keys(allMessages);

    let messageClass = 'message';

    allClassesKeys.forEach(classKey => {
      if (this.props[classKey]) {
        messageClass += ' ' + allMessages[classKey];
      }
    });

    return (
      <div className="ms-margin">
      <article className={messageClass}>
        <div className="message-header">
          <p>{this.props.title}</p>
          <button className="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">
          {this.props.children}
        </div>
      </article>
      </div>
    )
  }
}

export default Message;
