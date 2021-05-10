import React from "react";
import "bulma/css/bulma.css";
import "./Message.css";


function Message(props) {
    console.log(props)
    return (
      <article class={props.type}>
        <div class="message-header">
                <p>{props.header}</p>
          <button class="delete" aria-label="delete"></button>
        </div>
        <div class="message-body">
          {props.body}
        </div>
      </article>
    );
    
  
    
}


export default Message;