import React from 'react'
import './Message.css'
import 'bulma/css/bulma.css'

const Message = props => {


    return (
        <article className="message is-info">
            <div className="message-header">
                <p>Hello World</p>
                <button className="delete" aria-label="delete"></button>
            </div>
            <div className="message-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.</p>
            </div>
        </article>)

}

export default Message