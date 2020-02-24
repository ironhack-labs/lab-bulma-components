import React from 'react'
import Message from './Message'

const Container = props =>
    <>
        <article class="message is-info">
            <div class="message-header">
                <p>{props.title}</p>
                <button class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
                <Message message={props.message} strong={props.strong}></Message>
            </div>
        </article>

    </>

export default Container