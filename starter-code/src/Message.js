import React, { Component } from "react";

export class Message extends Component {
  render() {
    return (
      <div class="columns is-mobile is-centered">
        <div class="column is-one-quarter">
          <article className="message is-small is-info">
            <div className="message-header">
              <p>{this.props.title}</p>
              <button className="delete" aria-label="delete" />
            </div>
            <div className="message-body">{this.props.children}</div>
          </article>
        </div>
      </div>
    );
  }
}

export default Message;
