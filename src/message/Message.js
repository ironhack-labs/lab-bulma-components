import 'bulma/css/bulma.css';
import React, { Component} from 'react';


class Message extends Component {
  render() {
    return (
      <article class="message is-link">
        <div class="message-header">
          <p>Hello World!</p>
          <button class="delete is-medium" aria-label="delete"></button>
        </div>
        <div class="message-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>. 
        </div>
      </article>
    )
  }
}

export default Message;