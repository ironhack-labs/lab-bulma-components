import React from 'react'
import Message from './Message'

const Container = props =>
    <>
        <article className="message is-info">
            <div className="message-header">
                <p>{props.title}</p>
                <button className="delete" aria-label="delete"></button>
            </div>
            <div className="message-body">
                <Message message={props.message} strong={props.strong}></Message>
            </div>
        </article>

    </>

export default Container