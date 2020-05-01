import React, { Component } from 'react';
import 'bulma/css/bulma.css';

const bulmaStyle = {
    isActive: 'is-active',
    isBlack: 'is-black',
    isCentered: 'is-centered',
    isDanger: 'is-danger',
    isDark: 'is-dark',
    isFocused: 'is-focused',
    isGrouped: 'is-grouped',
    isHovered: 'is-hovered',
    isInfo: 'is-info',
    isInverted: 'is-inverted',
    isLarge: 'is-large',
    isLight: 'is-light',
    isLink: 'is-link',
    isLoading: 'is-loading',
    isMedium: 'is-medium',
    isOutlined: 'is-outlined',
    isPrimary: 'is-primary',
    isRight: 'is-right',
    isRounded: 'is-rounded',
    isSelected: 'is-selected',
    isSmall: 'is-small',
    isStatic: 'is-static',
    isSuccess: 'is-success',
    isText: 'is-text',
    isWarning: 'is-warning',
    isWhite: 'is-white',
  }

function getClass(obj) {
    let result = 'message ';
    for (let p in obj) {
        if(p==='children' || p==='title') {
            continue;
        }
        if (p in bulmaStyle) {
            result += `${bulmaStyle[p]} `;
        } else {
            result+=`${obj[p]} `;
        } 
    }
    return result;
}

class Message extends Component {
    render() {
        return (
            <>
            <article className={getClass(this.props)} style={{width:'600px'}}>
                <div className="message-header">
                    <p>{this.props.title}</p>
                    <button className="delete" aria-label="delete"></button>
                </div>
                <div className="message-body">
                    {this.props.children}
                </div>
            </article>
            </>
        )
    }
}
export default Message;