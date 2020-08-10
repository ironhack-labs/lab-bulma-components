import React from "react";
import { classes } from "../colors/Colors";
import "./Message.css";

const Message = (props) => {
  let myClasses = props.className;
  Object.keys(props).forEach((prop) => {
    if (classes[prop]) {
      myClasses += " " + classes[prop];
    }
  });
  return (
    <article className={"message " + myClasses}>
      <div className="message-header">
        <p>{props.title}</p>
        <button className="delete" aria-label="delete"></button>
      </div>
      <div className="message-body">{props.children}</div>
    </article>
  );
};
export default Message;
