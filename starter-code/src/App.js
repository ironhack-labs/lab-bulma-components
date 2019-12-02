import React, { Component } from 'react'
import NavBar from './NavBar'
import FormField from './FormField'
import CoolButton from './CoolButton'



export default class App extends Component {
    render() {
        return (
            <div>
                <NavBar >
                <CoolButton isSmall  isDanger className="is-rounded my-class">Log-in</CoolButton>
                <CoolButton isSmall isSuccess>Sign-up</CoolButton>
                </NavBar>
                <form>
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <FormField label="Password" type="text" placeholder="password" />
                <CoolButton class = "button is-rounded my-class is-danger is-small" isMedium= 'is-medium'>Button 1</CoolButton>
                <CoolButton class="button is-rounded my-class is-success is-small">Button 2</CoolButton>
                </form>
            </div>
        )
    }
}
