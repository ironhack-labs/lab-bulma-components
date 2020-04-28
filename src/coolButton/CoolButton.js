import React from "react";
import "bulma/css/bulma.css";

const CoolButton = (props) => {

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

const propsKeys = Object.keys(props)
const classesKeys = Object.keys(classes)


let classBulma = '';
propsKeys.forEach(element => {
  if(classesKeys.includes(element)) {
  classBulma += ' ' + classes[element]
  } 
});

  return (
  <button className= {props.className + classBulma}>{props.children}</button>
  );
};

export default CoolButton;
