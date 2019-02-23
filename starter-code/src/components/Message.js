import React from "react";

class Message extends React.Component {
  render() {
    const { title } = this.props;

    return (
      <div>
        <article className="message">
          <div className="message-header">
            <p>{title}</p>
            <button class="delete" aria-label="delete" />
          </div>
          <div class="message-body"> {this.props.children} </div>
        </article>
      </div>
    );
  }
}

export default Message;
