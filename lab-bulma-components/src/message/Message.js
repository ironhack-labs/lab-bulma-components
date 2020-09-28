import React from "react";
import "../App.css";
import "bulma/css/bulma.css";

const Message = (props) => {
  return (
    <article classNAme="message is-info">
      <div className="message-header">
        <p>{props.title}</p>
        <button className="delete" aria-label="delete"></button>
      </div>
      <div class="message-body"> {props.children}</div>
    </article>
  );
};

export default Message;
