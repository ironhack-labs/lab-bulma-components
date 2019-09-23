import React from "react";

const Message = props => {
  return (
    <article class="message">
      <div class="message-header">
        <p>{props.data.messageTitle}</p>
        <button class="delete" aria-label="delete"></button>
      </div>
      <div class="message-body">{props.data.messageBody}</div>
    </article>
  );
};

export default Message;
