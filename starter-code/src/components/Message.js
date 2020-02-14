import React from "react";

export default (props) => {
    return (
        <article className="message">
        <div className="message-header">
            <p>{props.title}</p>
            <button className="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">
            <p className="title has-text-centered">{props.text}</p>
        </div>
        </article>
    )
}