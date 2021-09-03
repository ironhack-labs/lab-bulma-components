import React from "react";
import "bulma/css/bulma.css";
import "./message.css"

const Message = (props) => {
 
  return (
    <div>
<article className="message is-info">
  <div className="message-header">
    <p>{props.title}</p>
    <button className="delete" aria-label="delete" />
  </div>
  <div className="message-body">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
    <strong>Pellentesque risus mi</strong>
  </div>
</article>
    </div>
  );
};

export default Message;

