import React from "react";
import "bulma/css/bulma.css";

function Message(props) {
  return (
    <article className="message is-danger">
      <div className="message-header">
        <p>{props.title}</p>
        <button className="delete" aria-label="delete"></button>
      </div>
      <div className="message-body">
        Stop your messing around, Better think of your future, Time you
        straightened right out, Creating problems in town. Rudy, It's a message
        to you, Rudy, It's a message to you
      </div>
    </article>
  );
}

export default Message;
