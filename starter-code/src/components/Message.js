import React from "react";
import bulmaClasses from "../constants";

const Message = (props) => {
  
  const classes = () => Object.keys(props)
    .map(prop => bulmaClasses[prop] || "")
    .join(" ");

  return (
    <article className={`message ${classes()}`}>
      <div className="message-header">
        <p>{props.title}</p>
        <button className="delete" aria-label="delete"></button>
      </div>
      <div className="message-body has-border-width-1">
        {props.children}
      </div>
    </article>
  )
}

export default Message;