import "./Message.css"
import 'bulma/css/bulma.css'

const Message = () => {
    return (        
        <article className="message is-info">
            <div className="message-header">
                <p>Hello World!</p>
                <button class="delete" aria-label="delete"></button>
            </div>
            <div className="message-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>
            </div>
        </article>               
   )
}

export default Message





