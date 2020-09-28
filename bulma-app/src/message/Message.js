import React from 'react';
import 'bulma/css/bulma.css';

const Message = props => {
    return (
      <>

        <article class="message">
            <div class="message-header">
            <p>Hello World</p>
            <button class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
            {props.text} <strong>{props.textstrong}</strong>
            </div>
        </article>
        
      </>
  
    );
  }
  
  export default Message;