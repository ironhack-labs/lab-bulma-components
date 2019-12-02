import React, { Component } from "react";

function Message(props) {
    return (
        <article className="message is-info">
            <br /><br />
            <div className="message-header">
                <p>{props.header}</p>
                <button className="delete" aria-label="delete"></button>
            </div>
            <div className="message-body">
                {props.children}
            </div>
        </article>
    )
    
}

export default Message;
