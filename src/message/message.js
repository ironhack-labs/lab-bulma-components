import React from "react";
import "bulma/css/bulma.css";

const Message = ({ color, size, title, text, width }) => (
  <article style={{width: `${width}` }} 
           className={`message ${color} ${size}`}>
    
    <div className="message-header">
      <p>{title}</p>
      <button className="delete" aria-label="delete"></button>
    </div>
    
    <div className="message-body">{text}</div>
  </article>
);

export default Message;