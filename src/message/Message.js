import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import './Message.css'

class Message extends Component {
    render() {
        return (
            <article className="message is-info">
                <div className="message-header">
                    <p>{this.props.header}</p>
                    <button className="delete" aria-label="delete"></button>
                </div>
                <div className="message-body">
                    {this.props.text}
                </div>
            </article>
        )
    }
}

export default Message