import React from 'react'
import 'bulma/css/bulma.css'
import './Messagge.css'

const Messagge = props => {

    const msgClasses = {
        isDark: 'is-dark',
        isPrimary: 'is-primary',
        isLink: 'is-link',
        isInfo: 'is-info',
        isSuccess: 'is-success',
        isWarning: 'is-warning',
        isDanger: 'is-danger'
    }

    let msgClass = `message`

    const propsKeys = Object.keys(props)

    propsKeys.forEach(elm => {
        if (elm in msgClasses) {
            msgClass += ` ${msgClasses[elm]}`
        }
    })

    return (
        <article id='messagge' class={msgClass}>
            <div class="message-header">
                <p>{props.title}</p>
                <button class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
                {props.children}
            </div>
        </article>
    )
}

export default Messagge