import React,  { Component} from 'react';


class Message extends Component{
    render(){
        return(
        <container>
            <article class="message is-info">
                <div class="message-header">
                    <p>Bienvenido a React</p>
                    <button class="delete" aria-label="delete"></button>
                </div>
                <div class="message-body">
                    En esta página podras <strong>registrarte con nosotros</strong>, y empezar a conocer el apasionante mundo de React.
                </div>
            </article>
        </container>
        )
    }
}

export default Message;
