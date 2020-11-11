import React from "react";
import "bulma/css/bulma.css";

function CoolButton(props) {
  return (
    <button
      className={`button ${props.className} 
      ${props.isSmall ? "is-small" : ""} 
      ${props.isDanger ? "is-danger" : ""} 
      ${props.isSuccess ? "is-success" : ""} 
      ${props.isPrimary ? "is-primary" : ""} 
      ${props.isSuccess ? "is-success" : ""} 
      ${props.isActive ? "is-active" : ""}
        ${props.isBlack ? "is-black" : ""} 
        ${props.isCentered ? "is-centered" : ""} 
        ${props.isDark ? "is-dark" : ""} 
        ${props.isFocused ? "is-focused" : ""} 
        ${props.isGrouped ? "is-grouped" : ""} 
        ${props.isHovered ? "is-hovered" : ""}
        ${props.isInfo ? "is-info" : ""} 
        ${props.isInverted ? "is-inverted" : ""}
        ${props.isLarge ? "is-large" : ""} 
        ${props.isLight ? "is-light" : ""} 
        ${props.isLink ? "is-link" : ""} 
        ${props.isLoading ? "is-loading" : ""}
        ${props.isMedium ? "is-medium" : ""} 
        ${props.isOutlined ? "is-outlined" : ""}
        ${props.isPrimary ? "is-primary" : ""}
        ${props.isRight ? "is-right" : ""} 
        ${props.isRounded ? "is-rounded" : ""} 
        ${props.isSelected ? "is-selected" : ""}
        ${props.isStatic ? "is-static" : ""} 
        ${props.isText ? "is-text" : ""} 
        ${props.isWarning ? "is-warning" : ""}
        ${props.isWhite ? "is-white" : ""}`}
    >
      {props.children}
    </button>
  );
}

export default CoolButton;
