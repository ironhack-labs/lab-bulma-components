import React from "react";

class Message extends React.Component {

  render() {

    return (
      <div className="messageBox columns ">
        <article className="message is-info">
          <div className="message-header">
            <p>{this.props.title}</p>
            <button className="delete" aria-label="delete"></button>
          </div>
          <div className="message-body">
            {this.props.message}<strong>{this.props.messageStrong}</strong>
          </div>
        </article>
      
      </div>
    )
  }
}

export default Message;