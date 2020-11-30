import React from 'react'

export default function Message(props) {
    return (
        <article className={"message " + props.className}>
            <div className="message-header">
                <p>{props.title}</p>
                <button class="delete" aria-label="delete"></button>
            </div>
            <div className="message-body">
                {props.paragraph}
                <strong> {props.strong} </strong>
            </div>
        </article>
    )
}
