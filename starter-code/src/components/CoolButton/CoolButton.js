import React from "react";

class CoolButton extends React.Component {
    classes = {
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

    render() {
        let classesResult = "button " + this.props.className;
        Object.keys(this.props).forEach(clas => {
            let index = Object.keys(this.classes).indexOf(clas);
            if (index >= 0) {
                let value = Object.values(this.classes)[index];
                classesResult += ` ${value}`;
            }
        });
        return (
            <div>
                <button className={classesResult}>{this.props.children}</button>
            </div>
        );
    }
}

export default CoolButton;