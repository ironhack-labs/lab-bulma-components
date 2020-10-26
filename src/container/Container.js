import React from 'react'
import Message from '../message/Message'

export default function Container(props) {
    let classes = Object.keys(props).filter(e => props[e] === true);
    classes = classes.map((elem) => { return createClassName(elem) });
    classes = classes.join(" ");
    return (
        <article className={"message " + classes}>
            <div className="message-header">
                <p>Info</p>
                <button className="delete" aria-label="delete"></button>
            </div>
            <div className="message-body">
                <Message />
            </div>
        </article>
    )
}

const createClassName = (input) => {
    return "is-" + input.slice(2).toLowerCase();
}