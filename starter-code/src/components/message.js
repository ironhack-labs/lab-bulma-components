import React from 'react';

const Message = (props) => {
  let isInfo = 'message'
  props.isInfo ? isInfo += " is-info" : false;
  return (
    <article className={isInfo}>
      <div className="message-header">
        <p>{props.title}</p>
        <button className="delete" aria-label="delete"></button>
      </div>
      <div className="message-body">
        {props.children}
      </div>
    </article>
  )
}


export default Message