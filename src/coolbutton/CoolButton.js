import React from "react";
import "bulma/css/bulma.css";
import "./CoolButton.css";

const CoolButton = (props) => {
  return (
    <button 
      className={`button ${props.className} 
      ${props.isDanger && "is-danger"} 
      ${props.isSmall && "is-small"} 
      ${props.isSuccess && "is-success"} 
      ${props.isLight && "is-light"} 
      ${props.isPrimary && "is-primary"}
      ${props.isActive && "is-active"}
      ${props.isBlack && "is-black"}
      ${props.isCentered && "is-centered"}
      ${props.isDark && "is-dark"}
      ${props.isFocused && "is-focused"}
      ${props.isGrouped && "is-grouped"}
      ${props.isHovered && "is-hovered"}
      ${props.isInfo && "is-info"}
      ${props.isInverted && "is-inverted"}
      ${props.isLarge && "is-large"}
      ${props.isLink && "is-link"}
      ${props.isLoading && "is-loading"}
      ${props.isMedium && "is-medium"}
      ${props.isOutlined && "is-outlined"}
      ${props.isRight && "is-right"}
      ${props.isRounded && "is-rounded"}
      ${props.isSelected && "is-selected"}
      ${props.isSmall && "is-small"}
      ${props.isStatic && "is-static"}
      ${props.isSuccess && "is-success"}
      ${props.isText && "is-text"}
      ${props.isWarning && "is-warning"}
      ${props.isWhite && "is-white"}
      `}
    >{props.name}</button>
  );
};

export default CoolButton;
