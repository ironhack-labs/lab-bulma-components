import "bulma/css/bulma.css"
import clsx from "clsx"
import "./CoolButton.css"
import traduce from "../utils"

const CoolButton = props => {
  const classes = clsx(props.className, traduce(props), "button")
  return <button className={classes}>{props.children}</button>
}

export default CoolButton
