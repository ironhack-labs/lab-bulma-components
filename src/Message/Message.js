import React from "react";
import "bulma/css/bulma.css";

const Message = (props) => {
  console.log(props);
  return (
    <article className={` ${props.isInfo ? "message is-info" : ""}`}>
      <div className="message-header">
        <p>{props.title}</p>
        <button className="delete" aria-label="delete"></button>
      </div>
      <div className="message-body"> {props.children}</div>
    </article>
  );
};

export default Message;
