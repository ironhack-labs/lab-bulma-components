import React, { Component } from "react";


function Message(props) {
  return (
    <article className={props.className}>
      <div className="message-header">
        <p>{props.title}</p>
        <button className="delete" aria-label="delete"></button>
      </div>
      <div className="message-body">
        {props.message}
  </div>
    </article>
  )
}

export default Message;
