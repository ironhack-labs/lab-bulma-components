import React from 'react';

function Message(props){

    
    return(
        <article class="message is-medium">
        <div class="message-header">
          <p>Medium message</p>
          <button class="delete is-medium" aria-label="delete"></button>
        </div>
        <div class="message-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
        </div>
      </article>

    )


}
export default Message;