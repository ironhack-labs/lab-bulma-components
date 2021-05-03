import React from "react";
import "bulma/css/bulma.css";
import "../message/Message.css";

const Message = (props) => {
  const { isInfo, title, children } = props;
  return (
    <div className="message">
      <article class={`message ${isInfo ? "is-info" : ""}`}>
        <div class="message-header">
          <p>{title}</p>
          <button class="delete" aria-label="delete"></button>
        </div>
        ≥<div class="message-body">{children}</div>
      </article>
    </div>
  );
};

export default Message;
