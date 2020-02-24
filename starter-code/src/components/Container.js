import React from 'react'
import Message from './Message'

const Container = props => {
    return (
        <>
            < article class="message is-link" >
                <div class="message-header">
                    <Message isInfo title="Hello World"> </Message>
                    <button class="delete" aria-label="delete"></button>
                </div>
                <div class="message-body">
                    <Message description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>."></Message>
                </div>
            </article >
        </>
    )
}

export default Container
