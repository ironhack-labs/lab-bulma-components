import 'bulma/css/bulma.css'
import React from 'react'
import './Message.css'


const Message = props => {

    return (
        <article className="message is-link">
            <div className="message-header">
                <p>{props.title}</p>
                <button className="delete" aria-label="delete"></button>
            </div>
            <div className="message-body">
                {props.info}
            </div>
        </article>

    )
}

export default Message