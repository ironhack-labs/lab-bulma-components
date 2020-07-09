import React, { Component } from 'react'
import FormField from '../formfield/FormField'
import CoolButton from '../coolbutton/CoolButton'
import './Signup.css';




class Signup extends Component {
    render() {
        return (
            <div class="signForm">
                <div className="box">
                    <h1>Signup Form</h1>
                    <FormField
                        label="Name"
                        type="text"
                        placeholder="e.g Alex Smith"
                    />
                    <FormField
                        label="Email"
                        type="email"
                        placeholder="e.g alexsmith@gmail.com"
                    />
                    <FormField
                        label="Password"
                        type="password"
                        placeholder="******"
                    />
                    <CoolButton
                        inner="Submit"
                        class="button is-rounded my-class is-primary"
                    />
                </div>
            </div>
        )
    }
}

export default Signup;
