import React from 'react';
import Message from "../message/Message";
import 'bulma/css/bulma.css';

const Container = props => {

return (
    <article class="message is-link">
  <div class="message-header">
    <p>{props.title}</p>
    <button class="delete" aria-label="delete"></button>
  </div>
  <div class="message-body">
    <Message />
    </div>
    </article>
)


}


export default Container;