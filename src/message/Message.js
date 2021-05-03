import React from 'react';
import 'bulma/css/bulma.css';

const Message = (props) => {
    let additionalClass = '';
    if(props.isInfo) additionalClass = 'is-info';
    console.log(props.children);
    
    return (
        <>
            <article class={`message ${additionalClass}`}>
                <div class="message-header">
                    <p>{props.title}</p>
                    <button class="delete" aria-label="delete"></button>
                </div>
                <div class="message-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                </div>
            </article>
        </>
    )
}
export default Message;