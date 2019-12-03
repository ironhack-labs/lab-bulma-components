import React from "react"

function Message(props){
    return(
        <>
        <article class="message is-info">
            <div class="message-header">
            <p>{props.title}</p>
            <button class="delete" aria-label="delete"></button>
      </div>
      <div class="message-body">
          {props.text}
          <strong>{props.strong}</strong>
      </div>
      </article>
      </>
    )
}
export default Message