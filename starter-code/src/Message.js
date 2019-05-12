import React, { Component } from "react";


class Message extends Component {

  render() {
    return (
      <article className="message is-info">
        <div className="message-header">
          <p>{this.props.params.header}</p>
          <button className="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">
          {this.props.params.message}
        </div>
      </article>
    );
  }
}

export default Message;