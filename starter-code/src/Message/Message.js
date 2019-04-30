import React from "react";
import "./Message.css"

function Message(props) {
  return (
    <article className={props.className}>
      <div class="message-header">
        <p>{props.messageTitle}</p>
        <button class="delete" aria-label="delete" />
      </div>
      <div class="message-body">
        {props.messageText}
      </div>
    </article>
  );
}

export default Message;