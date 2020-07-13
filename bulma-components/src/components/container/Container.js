import React from 'react'
import 'bulma/css/bulma.css';
import Message from "../Message/Message"
import "./Container.css"

const Container = () => {
    return (
    <section className="container message-container">
        <Message isInfo title="Hello World">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
        </Message>
    </section>

    )}

export default Container