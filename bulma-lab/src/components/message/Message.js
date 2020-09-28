import React from 'react'

// CSS Bulma
import 'bulma/css/bulma.css'

const Message = props => {
    
    console.log(props)

    const messageStates = {
        isInfo: 'is-info',
        isDark: 'is-dark',
        isPrimary: 'is-primary',
        isLink: 'is-link',
        isSuccess: 'is-success',
        isWarning: 'is-warning',
        isDanger: 'is-danger'
    }

    let messageClasses = 'message'

    const propsKeys = Object.keys(props)

    propsKeys.forEach(element => {
        if (element in messageStates) {
            messageClasses += ` ${messageStates[element]}`
        }
    })

    return (
        
        <article className={messageClasses}>
            <div className="message-header">
                <p>Hello World</p>
                <button className="delete" aria-label="delete"></button>
            </div>
            <div className="message-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a href='https://www.googlg.com'>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
            </div>
        </article>
    )

}

export default Message