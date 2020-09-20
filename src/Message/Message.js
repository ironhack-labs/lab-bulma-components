import React from "react";
import "bulma/css/bulma.css";
import { getClassName } from "../utils/utils.js";

const Message = (props) => {
  return (
    <article className="message is-info">
      <div className="message-header">
        <p>{props.title}</p>
        <button className="delete" aria-label="delete"></button>
      </div>
      <div className="message-body">{props.children}</div>
    </article>
  );
};

export default Message;
