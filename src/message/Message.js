import 'bulma/css/bulma.css';
import React from 'react'

const Message = props => {
    const classes = {
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
    let classList = 'message';
    for (const oneClass in props) {
        if (props[oneClass] === true) {
            classList = classList + ' ' + classes[oneClass];
        }
    }
    return (
        <div className={classList}>
            <div className='message-header'>
                <p>{props.title}</p>
                <button class="delete" aria-label="delete"></button>
            </div>
            <div className='message-body'>
                {props.children}
            </div>
        </div>
    )
}

export default Message
