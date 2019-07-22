import React from 'react';

const CoolButton = (props) => {
  let buttonClass = `button ${props.className}`

  props.isDanger ? buttonClass += ' is-danger' : false
  props.isSmall ? buttonClass += ' is-small' : false
  props.isSuccess ? buttonClass += ' is-success' : false
  props.isActive ? buttonClass += ' is-active' : false
  props.isBlack ? buttonClass += ' is-black' : false
  props.isCentered ? buttonClass += ' is-centered' : false
  props.isDark ? buttonClass += ' is-dark' : false
  props.isFocused ? buttonClass += ' is-focused' : false
  props.isGrouped ? buttonClass += ' is-grouped' : false
  props.isHovered ? buttonClass += ' is-houvered' : false
  props.isInfo ? buttonClass += ' is-info' : false
  props.isInverted ? buttonClass += ' is-inverted' : false
  props.isLarge ? buttonClass += ' is-large' : false
  props.isLight ? buttonClass += ' is-light' : false
  props.isLink ? buttonClass += ' is-link' : false
  props.isLoading ? buttonClass += ' is-loading' : false
  props.isMedium ? buttonClass += ' is-medium' : false
  props.isOutlined ? buttonClass += ' is-outlined' : false
  props.isPrimary ? buttonClass += ' is-primary' : false
  props.isRight ? buttonClass += ' is-right' : false
  props.isRounded ? buttonClass += ' is-rounded' : false
  props.isSelected ? buttonClass += ' is-selected ' : false
  props.isStatic ? buttonClass += ' is-static' : false
  props.isText ? buttonClass += ' is-text' : false
  props.isWarning ? buttonClass += ' is-Warning' : false
  props.isWhite ? buttonClass += ' is-white' : false

  return (
    <button className={buttonClass}>{props.children}</button>
  )
}

export default CoolButton;