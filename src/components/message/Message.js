import 'bulma/css/bulma.css';
import 'bulma/css/bulma.css';


const Message = (props) => {

    const {isWarning, title} = props
    
    return (
        <article class={`message ${isWarning && `is-warning`}`}>
            <div class="message-header">
                <p>{title}</p>
                <button class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">{props.children}</div>
        </article>
    )
}

export default Message