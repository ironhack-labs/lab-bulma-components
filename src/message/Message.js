import React from 'react';
import Container from "../container/Container"


export const Message=(props)=>{
     return(
        <article className={"message "+ props.className}>
      <div className="message-header">
        <p>{props.title}</p>
        <button className="delete" aria-label="delete"></button>
      </div>
      <div className="message-body">
      <p>{props.children}</p>
      </div>
    </article>
        
     )
}

export default Message