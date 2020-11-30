import React from 'react';
import 'bulma/css/bulma.css';

const Message = props => {
    return (
        <article className={props.className}>
            <div className="message-header">
                <p>{props.title}</p>
                <button class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
                {props.text}
  </div>
        </article>
    )
}
export default Message