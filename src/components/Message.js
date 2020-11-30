import React from 'react';
import 'bulma/css/bulma.css';

const Message = props => {

    return (

<article className={props.class}>
  <div className="message-header">
    <p>{props.title}</p>
    <button className="delete" aria-label="delete"></button>
  </div>
  <div className="message-body">
                <p>{props.text}</p>
                
  </div>
</article>
    )
}

export default Message