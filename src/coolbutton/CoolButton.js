import React from 'react'

const buttonClasses = {
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
  isWhite: 'is-white'
}
function CoolButton (props) {
    console.log('PROPS', props); // object
    let classes = "button ";
    //ternario como un if mas sencillo
    classes += props.className ? props.className : '';
    const propNames = Object.keys(props);
    //console.log(propNames)
    propNames.forEach( propName => {
      // classes += " " + propName;
      if(buttonClasses[propName]) { // if it exist in the buttonClasses obj, add it
        classes += " " + buttonClasses[propName];
        //console.log(classes)
      }
    })
    return (
      <div>
        <button className={classes}>{props.children}</button>
      </div>
    )
}
export default CoolButton
