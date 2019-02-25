import React from 'react'

export default ({titulo,cuerpo}) => {
  return <article class="message">
  <div class="message-header">
    <p>{titulo}</p>
    <button class="delete" aria-label="delete"></button>
  </div>
  <div class="message-body">
      {cuerpo}
  </div>
</article>
}