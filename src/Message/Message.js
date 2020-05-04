import React from "react";
import "./Message.css"
import 'bulma/css/bulma.css';

const Message = (props) => (

    <article class="message is-info">
        <div class="message-header">
            <p>{props.title}</p>
            <button class="delete" aria-label="delete"></button>
        </div>
        <div class="message-body">
            {props.children}
        </div>
    </article>
)
export default Message