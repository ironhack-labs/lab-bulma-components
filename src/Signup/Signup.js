import React, { Component } from 'react'
import Navbar from '../navbar/Navbar.js'
import FormField from '../formfield/FormField.js'
import CoolButton from '../CoolButton/CoolButton.js'
import 'bulma/css/bulma.css'
import '../Signup/Signup.css'

class Signup extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div id = 'formfield'>
                    <FormField label='Name' type='text' placeholder='Ms/Mr. Doe' />
                    <FormField label='Email' type='email' placeholder='your@email.com' />
                    <FormField label='Password' type='password' placeholder='Enter your Password' />
                </div>
                    <CoolButton isSuccess input='Send' />
            </div>
        )
    }
}

export default Signup