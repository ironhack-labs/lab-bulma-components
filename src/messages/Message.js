import React, { Component } from 'react';
import '../messages/Message.css'
import 'bulma/css/bulma.css';

function Message(props){
  // console.log(props)
  let {article, className} = props;
  console.log(className)
  return (
    <article className={article}>
      <div className={className}>
        <p>Info</p>
        <button className="delete" aria-label="delete"></button>
      </div>
      <div className="message-body">
        {props.children}
      </div>
    </article>
  )
}

export default Message




