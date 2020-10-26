import React from "react";

const Message = (props) => {
  return (
    <div>
      <article class="message">
        <div class="message-header">
          <p>{props.title}</p>
          <button class="delete" aria-label="delete"></button>
        </div>
        <div class="message-body">{props.children}</div>
      </article>
    </div>
  );
};

export default Message;
