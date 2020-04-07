import React from 'react';
import 'bulma/css/bulma.css';
import './message.css';


function message (props) {
  return (
   <article class="message is-link message-box">
    <div class="message-header">
      <p>Hello World</p>
      <button class="delete" aria-label="delete"></button>
    </div>
    <div class="message-body">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi.</strong>
    </div>
  </article>
  );
};

export default message;