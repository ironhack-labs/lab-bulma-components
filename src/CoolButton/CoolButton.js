import React from 'react'


function CoolButton(props) {
    // const{className, isSmall, isDanger} = props;
    //let array = Object.keys(props)
    // return (<div>
    //     <button className=`${className}`>Button 1</button>
    // </div>)
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
      let cases = "button ";
      for (let extra of Object.keys(props)){
          if(properties[extra])
          {cases += properties[extra] + ' ';
        }
          else if(extra = 'className') {
            cases += props[extra] + ' ';
        }
      }
    return (
<button class={cases}>{props.children}</button>
    )
}

export default CoolButton;