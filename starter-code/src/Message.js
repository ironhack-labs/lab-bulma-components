import React, { Component } from "react";


class Message extends Component {
  render() {
    console.log(this.props);
    
    const { title, text } = this.props;

    return(
      <article className="message">
        <div className="message-header">
          <p>{title}</p>
        </div>
        <div className="message-body">
          {text}
        </div>
      </article>
    );
  }
}

export default Message;