import React, { Component } from 'react'
import Navbar from "./Navbar.js"
import FormField from "./FormField.js"
import CoolButton from "./CoolButton.js"
import Signup from "./Signup.js"
import Message from "./Message.js"



export default class App extends Component {
    render() {
        return (
            <div>
            <Navbar />
                HIIIII
                <FormField />
                <CoolButton />
                <Signup />
                <Message >
</Message>
            </div>
        )
    }
}


