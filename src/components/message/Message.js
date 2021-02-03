import React from "react";
import "bulma/css/bulma.css";
import "./Message.css";

const Message = (props) => {
  return (
    <article class="message message-width mt-5">
      <div class="message-header">
        <p>{props.title}</p>
        <button class="delete" aria-label="delete"></button>
      </div>
      <div class="message-body">
        {props.regularText} <strong>{props.strongText}</strong>
      </div>
    </article>
  );
};

export default Message;
