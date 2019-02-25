import React from "react"

export default ({title,body}) => {
    return <article class="message">
    <div class="message-header">
      <p>{title}</p>
      <button class="delete" aria-label="delete"></button>
    </div>
    <div class="message-body">
        {body}
    </div>
  </article>
}