import React from 'react';

function Message(props) {
  var classMessage = 'message'
  if(props.isInfo) {classMessage += ` is-info`} 
  return (
    <article className={classMessage}>
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

export default Message;