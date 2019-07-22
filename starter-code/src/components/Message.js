import React from 'react';

const Message = ({children, isInfo, title}) => {
  let classe = ' ';
  let classeHeader = ' ';
  if (isInfo) {
    classe = 'message-info';
    classeHeader = 'message-header-info';
  }

  return (
    <article className={`message ${classe}`}>
      <div className={`message-header ${classeHeader}`}>
        <p>{title}</p>
        <button className="delete" aria-label="delete"></button>
      </div>
      <div className="message-body">
        {children}
      </div>
    </article>
  )
}

export default Message;