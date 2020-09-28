import React from 'react'

import 'bulma/css/bulma.css'
import './message.css'


const Message = props => {

    return (
        <article className="message is-info message-size">
            <div className="message-header">
                <p>{props.title}</p>
                <button className="delete" aria-label="delete"></button>
            </div>
            <div className="message-body">
                <p>{props.message} {props.strongMessage}</p>
            </div>
        </article>
    )
}

export default Message