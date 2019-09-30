import React, { Component } from 'react'
import NavBar from './Navbar'
import FormField from './FormField'
import CoolButton from './CoolButton'
import Message from './Message'
import Container from './Container'

class Signup extends Component {
    render() {
        return (
            <Container>
                <Message header="test header">This is a message</Message>
                <NavBar></NavBar>
                <form>
                    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                    <FormField label="Password" type="password" />
                    <CoolButton isFocused>Submit</CoolButton>
                </form>
            </Container>
        );
    }
}

export default Signup;