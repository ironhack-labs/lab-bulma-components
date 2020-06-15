import React from 'react';
import 'bulma/css/bulma.css';

function CoolButton(props) {

    let properties = {
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

      let extras = 'button ';
      for (let extra of Object.keys(props)) {
          if(properties[extra])
          {extras += properties[extra] + ' ';}
          else if (extra = 'className') {
            extras += props[extra] + ' ';
          }

      }

        return (

            <button class={extras}>{props.children}</button>

        );
}

export default CoolButton;