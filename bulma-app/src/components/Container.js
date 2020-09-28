import React from 'react'
import 'bulma/css/bulma.css'
import './Container.css'

const Container = () => {
    return (
        <>
            <article class="message config">
                <div class="message-header">
                    <p>Hello World</p>
                    <button class="delete" aria-label="delete"></button>
                </div>
                <div class="message-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a href="https://bulma.io">felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                </div>
            </article>
        </>
    )
}

export default Container