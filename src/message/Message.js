import React from 'react'
import 'bulma/css/bulma.css'
import './Message.css'


const Message = props => {

    const details = `message ${props.color}`

    return (
      
        <article class={details}>
            <div class="message-header">
                <p>{props.title}</p>
                <button class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
                {props.bodyMsg}
            </div>
        </article>
    )
}



export default Message