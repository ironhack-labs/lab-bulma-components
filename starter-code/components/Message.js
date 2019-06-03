import React from 'react'

const Message = props => {

    let compose = () => {
        return props.clase + " message"
    }

    return (
        <div>
        <article class={compose()}>
          <div class="message-header">
            <p>{props.title}</p>
            <button class="delete" aria-label="delete"></button>
          </div>
          <div class="message-body">
          {props.children}
          </div>
        </article>
</div>

    )
}

   
export default Message



// <article class="message is-info">
//   <div class="message-header">
//     <p>Info</p>
//     <button class="delete" aria-label="delete"></button>
//   </div>
//   <div class="message-body">
//     Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
//   </div>
// </article>