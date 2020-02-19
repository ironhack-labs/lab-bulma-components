import React, { Component } from 'react'
import Nav from "./navbar"
import FormField from "./FormField"
import CoolButton from "./CoolButton"

export default class App extends Component {
    render() {
        return (
            <div>
                <Nav>
                  <CoolButton className="button is-rounded my-class is-info is-small" label="Login"/>
                  <CoolButton className="button is-small is-primary" label="Signup"/>

                </Nav>

                <FormField placeholder="yunnuen" type="text" Name="Name"/>
                <FormField placeholder="yunnuen" type="email" Name="Email"/>
                <FormField placeholder="yunnuen" type="password" Name="Password"/>
                <CoolButton className="button is-rounded my-class is-danger is-small" label="Button1"/>

            </div>


        )
    }
}
