import React from "react";
import "bulma/css/bulma.css";
import { getClassName } from "../utils/utils.js";

const Message = (props) => {
  let resClass = "message  ";
  resClass += getClassName(props);

  return (
    <article className={resClass}>
      <div className="message-header">
        <p>{props.title}</p>
        <button className="delete" aria-label="delete"></button>
      </div>
      <div className="message-body">{props.children}</div>
    </article>
  );
};

export default Message;
