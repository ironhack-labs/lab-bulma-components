import clsx from "clsx"
import traduce from "../utils"
import "./Message.css"

const Message = ({ className, title, children, ...otherProps }) => {
  const classes = clsx(className, "message", traduce(otherProps))
  return (
    <article class={classes}>
      <div class="message-header">
        <p>{title}</p>
        <button class="delete" aria-label="delete"></button>
      </div>
      <div class="message-body">{children}</div>
    </article>
  )
}
export default Message
