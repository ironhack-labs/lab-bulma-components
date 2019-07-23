import React, {Component} from "react";

const Message = ({isInfo, title, children}) => {
  isInfo ? isInfo = "is-info" : "";
  let className = "message " + isInfo;
  return (
    <article className={className}>
      <div className="message-header">
        <p>{title}</p>
        <button className="delete" aria-label="delete"></button>
      </div>
      <div className="message-body">
        {children}
      </div>
    </article>
  )
}


export default Message;
