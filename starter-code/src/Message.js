import React from "react";

function Message(props) {
  const classes = `message ${props.className ? props.className : ""}${
    props.isInfo ? " is-info" : ""
  }`;
  // var price = Math.round(Math.random() * 100)
  // let element = <h1>Hello, world!</h1>;
  return (
    <div className={classes}>
      <div className="message-header">
        <p>{props.title}</p>
        <button className="delete" aria-label="delete"></button>
      </div>
      <div className="message-body">{props.children}</div>
    </div>
  );
}

export default Message;

