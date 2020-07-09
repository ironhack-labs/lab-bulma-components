import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import Navbar from '../navbar/Navbar.js'
import Container from '../container/Container.js'
import Message from '../message/Message.js'

class Signup extends Component {
    render() {
        return (
            <section className="form">
                <Navbar />
                <Message header="Hello World" text="Lorem ipsum dolor sit amer, consectetur adipiscing elit."/>
                <Container />
            </section>
        )
    }
}

export default Signup