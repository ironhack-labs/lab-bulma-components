import React from 'react'

function createClass(props){
    const isInfo = props.isInfo ? "is-info": '';
    return isInfo
}


function Message(props) {
    return (
        <article className={`message ${createClass(props)}`}>
            <div className="message-header">
                <p>{props.title}</p>
                <button className="delete" aria-label="delete"></button>
            </div>
            <div className="message-body">
                {props.children}
            </div>
        </article>

    )
}

export default Message
