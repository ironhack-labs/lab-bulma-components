import 'bulma/css/bulma.css'
import React from 'react'

const Message = (props) => {
    return (
        <article className={"message " + props.className}>
            <div className="message-header">
                <p>{props.title}</p>
                <button class="delete" aria-label="delete"></button>
            </div>
            <div className="message-body">
                {props.paragraph}
                {props.strong}
            </div>
        </article>
    )
}

export default Message
