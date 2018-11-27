import React, { Component } from "react";

class Message extends Component {

  render(){

    const { name, content } = this.props;

    return(
      <article className="message is-info">
        <div className="message-header">
          <p>{name}</p>
          <button className="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">
          {content}
        </div>
      </article>
    )
  }

}

// export your component CLASS so that you can display it from other files
export default Message;