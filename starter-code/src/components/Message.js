import React, { Component } from "react";


class Message extends Component {
    render() {
        return (
            <article className={this.props.className}>
            <div class="message-header">
                <p>{this.props.title}</p>
                <button class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
                {this.props.children}
            </div>
            </article>
        )
    }
}


export default Message;