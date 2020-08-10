import React from "react";

const Message = (props) => {
  return (
    <article className="message is-info">
      <div className="message-header">
        <p>{props.title}</p>
        <button className="delete" aria-label="delete"></button>
      </div>
      <div className="message-body">
        {props.text} <strong>{props.strong}</strong>
      </div>
    </article>
  );
};

export default Message;
