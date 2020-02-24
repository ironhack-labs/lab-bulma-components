import React from "react";

function CoolButton(props) {
  const classes = `button ${props.className ? props.className : ""}${
    props.isSmall ? " is-small" : ""
  }${props.isActive ? " is-active" : ""}${props.isBlack ? " is-black" : ""}${
    props.isCentered ? " is-centered" : ""
  }${props.isDanger ? " is-danger" : ""}${props.isDark ? " is-dark" : ""}${
    props.isFocused ? " is-focused" : ""
  }${props.isGrouped ? " is-grouped" : ""}${
    props.isHovered ? " is-hovered" : ""
  }${props.isInfo ? " is-info" : ""}${props.isInverted ? " is-inverted" : ""}${
    props.isLarge ? " is-large" : ""
  }${props.isLight ? " is-light" : ""}${props.isLink ? " is-link" : ""}${
    props.isLoading ? " is-loading" : ""
  }${props.isMedium ? " is-medium" : ""}${
    props.isOutlined ? " is-outlined" : ""
  }${props.isPrimary ? " is-primary" : ""}${props.isRight ? " is-right" : ""}${
    props.isRounded ? " is-rounded" : ""
  }${props.isSelected ? " is-selected" : ""}${
    props.isStatic ? " is-static" : ""
  }${props.isSuccess ? " is-success" : ""}${props.isText ? " is-text" : ""}${
    props.isWarning ? " is-warning" : ""
  }${props.isWhite ? " is-white" : ""}`;
  return <button className={classes}>{props.children}</button>;
}

export default CoolButton;
