import React, { Component } from 'react'
import NavBar from './Navbar'
import FormField from './FormField'
import CoolButton from './CoolButton'

class Signup extends Component {
    render() {
        return (
            <div>
                <NavBar></NavBar>
                <form>
                    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                    <FormField label="Password" type="password" />
                    <CoolButton>Submit</CoolButton>
                </form>
            </div>
        );
    }
}

export default Signup;