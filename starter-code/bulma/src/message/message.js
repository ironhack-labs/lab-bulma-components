import React from 'react'
import './message.css'
const Message = props => {
    return (
        <>
            <article className="message is-link">
                <div className="message-header">
                    <p>Normal message</p>
                    <button className="delete" aria-label="delete"></button>
                </div>
                <div className="message-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>
  </div>
            </article>
        </>
    )
}

export default Message