import React, { Component } from 'react'
import Navbar from './components/Navbar.js'
import FormField from './components/FormField.js'
import Signup from './components/Signup.js'
import Message from './components/Message.js'

export default class App extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <FormField label="name" placeholder="name"/>
                <FormField label="email" placeholder="email"/>
                <Signup/>
                <Message/>
            </div>
        )
    }
}




