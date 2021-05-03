import React from "react";
import "bulma/css/bulma.css";
import "./Message.css";

const Message = ({isInfo, title, children}) => {
  return (
    <article class={`message ${isInfo ? "is-info" : ""}`}>
      <div class="message-header">
        <p>{title}</p>
        <button class="delete" aria-label="delete"></button>
      </div>
      <div class="message-body">{children}</div>
    </article>
  );
};

export default Message;