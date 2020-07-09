import React, { Component } from 'react';
import './Message.css'


class Message extends Component {
    render() {
        return (
            <div className="messageBox">
                <article class="message is-info">
                    <div class="message-header">
                        <p>{this.props.title}</p>
                        <button class="delete" aria-label="delete"></button>
                    </div>
                    <div class="message-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
                    </div>
                </article>
            </div>
        )
    }
}

export default Message
