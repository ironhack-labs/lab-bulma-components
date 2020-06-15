import React from 'react';

function Message(props) {
    return(<div>

    <article class="message">
  <div class="message-header">
    <p>{props.title}</p>
    <button class="delete" aria-label="delete"></button>
  </div>
  <div class="message-body">
    {props.text}
  </div>
</article>

    </div>)
}

export default Message