import React from 'react'


import './Message.css'

const Message = ({title}) => {
    return (
        <>
            <div className='main-message'>
                <h2>Message Component</h2>
                <article className="message is-small">
                    <div className="message-header">
                        <p>{title}</p>
                        <button className="delete is-small" aria-label="delete"></button>
                    </div>
                    <div className="message-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
                    </div>
                </article>
            </div>
        </>
    )
}

export default Message;