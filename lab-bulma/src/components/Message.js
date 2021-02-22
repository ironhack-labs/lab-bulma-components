import './Message.css'

const Message = ({ title, text }) => {
 return (
    <article className="message is-primary is-medium">
     <div className="message-header">
      <p>{title}</p>
     </div>
    <div className="message-body">
     {text}
    </div>
    </article>
    )
}

export default Message 