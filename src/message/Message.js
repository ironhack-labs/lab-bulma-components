import React from 'react'

export default function Message({message: { header, body }}) {
    return (
        <article class="message">
            <div class="message-header">
                <p>{header}</p>
                <button class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
                {body}
            </div>
        </article>
    )
}
