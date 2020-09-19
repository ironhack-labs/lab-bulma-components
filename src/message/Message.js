import React from 'react';
import 'bulma/css/bulma.css';
import './Message.css';

const Message = () => {
    const messageTxt = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>"
    return(
      <article class="message is-info msg-box">
      <div class="message-header">
        <p>Info</p>
        <button class="delete" aria-label="delete"></button>
      </div>
      <div class="message-body">
        {messageTxt}
      </div>
    </article>
    )
  }

  export default Message