import React from 'react'
import './Message.css'

export default function Message (props) {
  return (
    <article className='message is-primary'>
      <div className='message-header'>
        <p>{props.title}</p>
        <button class='delete' aria-label='delete' />
      </div>
      <div className='message-body'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus
        ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis
        venenatisefficitur. Aenean ac eleifend lacus, in mollis lectus. Donec
        sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id
        porttitor mi magna a neque. Donec dui urna, vehicula et sem eget,
        facilisis sodales sem.
      </div>
    </article>
  )
}
