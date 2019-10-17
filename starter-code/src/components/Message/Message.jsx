import React from 'react';
import './Message';

class Message extends React.Component {
    render () {
        return (

                <article class="message is-primary">
                    <div class="message-header">
                    <p>Primary</p>
                    <button class="delete" aria-label="delete"></button>
                    </div>
                    <div class="message-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>
                    </div>
                </article>
        );
    }
}






export default Message;