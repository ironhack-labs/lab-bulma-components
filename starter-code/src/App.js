import React, { Component } from 'react'
import Nav from "../components/navbar"
import FormField from "../components/FormField"
import CoolButton from "../components/CoolButton"
import Signup from "../components/Signup"

export default class App extends Component {
    render() {
        return (
            <div>
                <Nav>
                  <CoolButton className="button is-rounded my-class is-info is-small" label="Login"/>
                  <CoolButton className="button is-small is-primary" label="Signup"/>

                </Nav>
                <FormField placeholder="e.g Alex Smith" type="text" Name="Name"/>
                <FormField placeholder="e.g. alexsmith@gmail.com" type="email" Name="Email"/>
                <CoolButton className="button is-rounded my-class is-danger is-small" label="Button1"/>
                <CoolButton className="button is-small is-success" label="Button2"/>

                {/*<Signup/>*/}

            </div>


        )
    }
}
