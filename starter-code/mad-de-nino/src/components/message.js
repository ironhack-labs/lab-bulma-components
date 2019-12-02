import React from "react";

const Message = props => {
  return (
    <div className="message-box">
      <article className="message is-info">
        <div className="message-header">
          <p>{props.title}</p>
          <button className="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">{props.text}{props.strong}</div>
      </article>
    </div>
  );
};

export default Message;
