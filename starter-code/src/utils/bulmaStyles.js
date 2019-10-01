let checkStyles = (type, props) => {

  const styles = {
    isActive: "is-active",
    isBlack: "is-black",
    isCentered: "is-centered",
    isDanger: "is-danger",
    isDark: "is-dark",
    isFocused: "is-focused",
    isGrouped: "is-grouped",
    isHovered: "is-hovered",
    isInfo: "is-info",
    isInverted: "is-inverted",
    isLarge: "is-large",
    isLight: "is-light",
    isLink: "is-link",
    isLoading: "is-loading",
    isMedium: "is-medium",
    isOutlined: "is-outlined",
    isPrimary: "is-primary",
    isRight: "is-right",
    isRounded: "is-rounded",
    isSelected: "is-selected",
    isSmall: "is-small",
    isStatic: "is-static",
    isSuccess: "is-success",
    isText: "is-text",
    isWarning: "is-warning",
    isWhite: "is-white"
  };
  
  
  let classNameString = props.className ? props.className : "";
  
  for (let style in styles) {
    if (props.hasOwnProperty(style)) {
      classNameString += ` ${styles[style]} `;
    }
  }
  
  if (props.className) {
    classNameString += props.className;
  }


return classNameString = type + ' ' + classNameString;
}

module.exports = checkStyles