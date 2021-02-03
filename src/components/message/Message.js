import React from "react";
import "bulma/css/bulma.css";
import "./Message.css";

const Message = (props) => {
  return (
    <article className={`message message-width mt-5 ${props.class}`}>
      <div className="message-header">
        <p>{props.title}</p>
        <button class="delete" aria-label="delete"></button>
      </div>
      <div className="message-body">
        {props.regularText} <strong>{props.strongText}</strong>
      </div>
    </article>
  );
};

export default Message;
