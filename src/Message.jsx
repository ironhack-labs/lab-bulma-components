import React, { Component } from 'react'

const lookup = {
    isDark: 'is-dark',
    isPrimary: 'is-primary',
    isLink: 'is-link',
    isInfo: 'is-info',
    isSuccess: 'is-success',
    isWarning: 'is-warning',
    isDanger: 'is-danger',
    isSmall: 'is-small',
    isMedium: 'is-medium',
    isLarge: 'is-large'
}

class Message extends Component {
    render() {
        let propClassString = ['message', this.className, ...Object.keys(this.props).map(c => lookup[c])].filter(e => e).join(' ')

        let header = (this.props.header) ? (
            <div className="message-header">
                <p>{this.props.header}</p>
                <button className="delete" aria-label="delete"></button>
            </div>
        ) : ""

        return (
            <article className={propClassString}>
                {header}
                <div className="message-body">
                    {this.props.children}
                </div>
            </article>
        );
    }
}

export default Message;
