import React from 'react';
import 'bulma/css/bulma.css';


class CoolButtonList extends React.Component {
    render() {
        const buttonsClasses = {
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

          const classesValues = Object.values(buttonsClasses)

          const buttonsToRender = classesValues.map(button => <div><button className = {`button is-rounded ${button}`} >{button}</button><br/></div>)

        return buttonsToRender;
    }
}

export default CoolButtonList;