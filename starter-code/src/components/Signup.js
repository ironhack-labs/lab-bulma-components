import React, { Component } from 'react'
import Navbar from "./Navbar.js"
import CoolButton from './CoolButton.js'
import FormField from './FormField.js'


export default class Signup extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <FormField label="name" placeholder="name"/>
                <FormField label="email" placeholder="email"/>
                <FormField label="password" placeholder="password"/>
                <CoolButton className="button is-primary is-rounded">
                  <strong>Submit</strong>
                </CoolButton>
            </div>
        )
    }
}
