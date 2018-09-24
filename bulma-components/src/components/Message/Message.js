import React from 'react';

import './Message.css';

const messageClasses = {
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
};

const message = ({ children, title, ...classes}) => {
    const mesClasses = ['message'];

    for(const cl in classes) {
        mesClasses.push(messageClasses[cl]);
    }



    return (
        <article className={ mesClasses.join(" ") }>
            <div className="message-header">
                <p>{ title }</p>
            </div>
            <div className="message-body">
                { children }
            </div>
        </article>
    );
};

export default  message;