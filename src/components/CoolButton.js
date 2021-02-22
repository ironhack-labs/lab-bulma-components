import "bulma/css/bulma.css"
import "./CoolButton.css"

const CoolButton = props => {
  const classes = `${traduce(props).join(" ")} button ${props.className}`
  return <button className={classes}>{props.children}</button>
}

const traduce = props => {
  const classArray = []
  Object.entries(props).forEach(([key, value]) => {
    if (classTraduction.hasOwnProperty(key) && value) {
      classArray.push(classTraduction[key])
    }
  })
  return classArray
}

const classTraduction = {
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
  isWhite: "is-white",
}

export default CoolButton
