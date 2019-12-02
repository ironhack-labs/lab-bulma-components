import React, { Component } from "react";

class Message extends Component {
  render() {
    return (
      <article className={this.props.classMessage}>
        {/* If I change the class ia changing the type of message */}
        <div className="message-header">
          <p>{this.props.title}</p>
        </div>
        <div className="message-body">
        {this.props.children}
        </div>
      </article>
    );
  }
}

export default Message;
