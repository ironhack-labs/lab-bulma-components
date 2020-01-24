import React, { Component } from "react";


class Message extends Component {

    render() {

        return (
            <article className="message is-info">
                <div className="message-header">
                    <p>{this.props.header}</p>
                    <button className="delete" aria-label="delete"></button>
                </div>
                <div className="message-body">
                    <p>{this.props.children}</p>
                </div>
            </article>

        )
    }
}

export default Message