import React, { Component } from 'react';


class Message extends Component {

    colors = {
        isBlack: 'is-black',
        isDanger: 'is-danger',
        isDark: 'is-dark',
        isInfo: 'is-info',
        isLight: 'is-light',
        isLink: 'is-link',
        isPrimary: 'is-primary',
        isSuccess: 'is-success',
        isWarning: 'is-warning',
        isWhite: 'is-white',
        isBlue: 'is-blue'
    }

    sizes = {
        isSmall: 'is-small',
        isMedium: 'is-medium',
        isLarge: 'is-large'
    }

    handleColor = () => {
        const color = Object.keys(this.props).filter(prop => this.colors[prop]);
        return this.colors[color];
    }

    handleSize = () => {
        const size = Object.keys(this.props).filter(prop => this.sizes[prop]);
        return this.sizes[size];
    }

    hasHeader = () => 
        this.props.title  && (
            <div className="message-header">
                <p>{this.props.title}</p>
                <button className="delete" aria-label="delete"></button>
            </div>
        )
    

    render() {
        return (
            <article className={`message ${this.handleColor()} ${this.handleSize()}`}>
                {this.hasHeader()}

                <div className="message-body">
                    {this.props.children}
                </div>
            </article>
        );

    }
}

export default Message;