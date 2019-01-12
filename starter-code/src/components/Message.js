import React, { Component } from 'react'

export default class Message extends Component {
    state = {
        isInfo: (val) => val ? 'is-info' : '',
    }
    render() {
        return (
            <article className={`message ${this.props.className} ${this.state.isInfo(this.props.isInfo)}`}>
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