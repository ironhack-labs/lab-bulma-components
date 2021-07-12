import React from 'react'

export default function CoolButton(props) {
    // let buttonClass = `button ${props.isDanger ? "is-danger" : ''} ${props.isRounded ? "is-rounded" : ''} ${props.isSmall ? "is-small" : ''} ${props.isSuccess ? "is-success" : ''}`

    console.log(props)

    let buttonClasses = {
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

    function createButtonClass() {
        let buttonClass = `button`
        for (let prop in props) {
            for (let singleClass in buttonClasses) {
                if (prop === singleClass) {
                    buttonClass += ` ${buttonClasses[prop]}`;
                }
            }
        }
        return buttonClass;
    }

    let buttonClass = createButtonClass();
    
    return (
        
        <div>
            <button className={buttonClass}>{ props.children }</button>
        </div>
    )
}
