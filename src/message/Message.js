import React from 'react';
import './Message.css';

const Message = props => {
  return (
    <article className="message is-link">
      <div className="message-header">
        <p>{props.title}</p>
        <button className="delete" aria-label="delete"></button>
      </div>
      <div className="message-body">
        {props.message} <strong>{props.messagestrong}</strong>
      </div>
    </article>

  )
}
export default Message;