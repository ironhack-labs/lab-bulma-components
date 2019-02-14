import React from "react";
import 'bulma/css/bulma.css';

let classes = {
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

const button = (props) => {
    let classArr = ["button"];
    console.log(props)
    // console.log(Object.keys(classes))
    Object.keys(props).forEach((el)=>{
      if (classes[el]) classArr.push(classes[el])
    })
    console.log(classArr);
    return (
      <button className={classArr.join(" ")}>{props.children}</button>
      // <button className="is-danger">{props.children}</button>
    )
}

export default button;