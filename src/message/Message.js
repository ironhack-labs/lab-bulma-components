import 'bulma/css/bulma.css'
import React from 'react'

const Message = (props) => {
    return (
        <div className='Message'>
            <article class="message is-info">
                <div class="message-header">
                    <p>Hello world</p>
                    <button class="delete" aria-label="delete"></button>
                </div>
                <div class="message-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>
                </div>
            </article>
        </div>
    )
}

export default Message