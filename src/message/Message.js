import 'bulma/css/bulma.css';
import "./Message.css"
import React from 'react';

const Message = (props) => {
  let classes = "message "
  if (props.isInfo) {
    classes += " " + "is-info"
  }
  return (
    <article className={classes}>
      <div className="message-header">
        <p>{props.title}</p>
        <button className="delete" aria-label="delete"></button>
      </div>
      <div className="message-body">
        {props.children} // this uses the children of the tag
      </div>
    </article>
  );
};

export default Message;