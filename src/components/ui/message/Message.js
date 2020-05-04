import React from 'react'
import './Message.css'

const Message = ({className, title, text}) => {
    return (
        <>
            <div className="container cont-mes">

                <article className={className}>
                    <div className="message-header">
                        <p>{title}</p>
                        <button className="delete" aria-label="delete"></button>
                    </div>
                    <div className="message-body">
                        {text}
                    </div>
                </article>
            </div>
        </>
    )
}
export default Message