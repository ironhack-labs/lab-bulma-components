import React from 'react';
import allMessageClass from './messageClass'

class MessageInput extends React.Component {
    render() {
        let classNames = 'message ' + this.props.className
        Object.keys(this.props).forEach(e => {
            let index = Object.keys(allMessageClass).indexOf(e)
            if (index !== -1) classNames += ' ' + Object.values(allMessageClass)[index]
        })
        return (
            <article className={classNames}>
                <div className="message-header">
                    <p>{this.props.title}</p>
                    <button className="delete" aria-label="delete"></button>
                </div>
                <div className="message-body">
                    {this.props.children}
                </div>
            </article>
        )
    }
}

export default MessageInput;