import React from 'react';

function MessageComponent(props) {
  var articleClass = "message"
  if(props.isInfo) {
    articleClass += " is-info";
  }
  return(
    <article className={articleClass}>
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

export default MessageComponent;