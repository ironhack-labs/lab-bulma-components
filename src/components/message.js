import React from 'react'
import './message.css'
const Message = props =>{

    return (
        <div className="infox">
        <article className={props.className}>
        <div className="message-header">
          <p>Hello World</p>
          <button className="delete"></button>
        </div>
        <div className="message-body">
            {props.text} <strong>{props.textStrong}</strong>
        </div>
      </article>
        </div>
    )


}

export default Message