import 'bulma/css/bulma.css';
import './Container.css';


import Message from "../message/Message"

const Container = props => {

    return (
      < article class = "message is-success is-small note" >
        
        <div class="message-header">
            <p>Success</p>
            <button class="delete" aria-label="delete"></button>
        </div>

        <Message class="is-¡nfo" title='Hello World'/>

        </article>
    )
}


export default Container