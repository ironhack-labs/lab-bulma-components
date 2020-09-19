import React from "react";
import "bulma/css/bulma.css";

const Message = props => {
  return (
    <article class={props.className}>
      <div class="message-header">
        <h4>{props.title}</h4>
        <button class="delete" aria-label="delete"></button>
      </div>
      <div class="message-body">
        <p>{props.text}</p>
      </div>
    </article>
  )
}

export default Message;