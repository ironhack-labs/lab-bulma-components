import React, { Component } from "react";


class Message extends Component {
  render() {
    return (
      <div className="container">
        <article className={"message " + this.props.mclas}>
          <div className="message-header">
            <p>{this.props.title}</p>
            <button className="delete" aria-label="delete" />
          </div>
          <div className="message-body">
            {this.props.message}
          </div>
        </article>
      </div>
    );
  }
}

export default Message;
