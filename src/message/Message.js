import React from "react";
import "bulma/css/bulma.css";

const  Message = (props) => {
    console.log(props);
  return (
    <div>
      <div className="message-header">
        <p>{props.title}</p>
        <button className="delete" aria-label="delete"></button>
      </div>
      <div className="message-body">
       {props.children}
      </div>
    </div>
  );
}

export default Message;
