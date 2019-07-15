import React, { Component } from 'react'
import NavBar from "../components/NavBar";
import FormField from "../components/FormField";
import CoolButton from "../components/CoolButton";
export default class SignUp extends Component {
  render() {
    return (
      <div>
                <NavBar></NavBar>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>

      </div>
    )
  }
}
