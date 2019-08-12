import React from 'react';
import FormField from './formField'
import NavBar from './nav'
import Message from './message'
import Container from './container'

const Signup = props => {
    return (
        <header>
            <NavBar />
            <FormField />
            <Message />
        </header>
    )
}

export default Signup