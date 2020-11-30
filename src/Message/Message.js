import React from 'react'
import './Message.css'

export default function Message(props) {
    
    return (
<article className="message">
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
