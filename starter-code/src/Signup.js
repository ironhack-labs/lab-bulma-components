import React, { Component } from 'react'
import FormField from './FormField'
import CoolButton from './CoolButton'
import Container from './Container'
import Navbar from './Navbar'

export class Signup extends Component {
    render() {
        return (
        <div>    
            <Navbar />
            <Container >
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <FormField label="Password" type="password" placeholder="" />
                <CoolButton isSmall isSuccess>Signup</CoolButton>
            </Container>   
        </div>
        
        )
    }
}

export default Signup
