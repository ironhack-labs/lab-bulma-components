import "bulma/css/bulma.css"
import clsx from "clsx"
import traduce from "../utils"

const CoolButton = ({ className, children, ...otherProps }) => {
  const classes = clsx(className, traduce(otherProps), "button")
  return <button className={classes}>{children}</button>
}

export default CoolButton
