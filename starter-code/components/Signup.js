import React, { Component } from 'react'

import Nav from "../components/Nav"
import Form from "../components/Form"
import CoolButton from "../components/CoolButton"


class Signup extends Component {
  render() {
    return (
      <div className="signup">
        <Nav />
        <Form label="Name" type="text" placeholder="e.g Alex Smith" />
        <Form label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <Form label="Password" type="password" placeholder="xxxxxxxxxx" />
        <CoolButton isDanger className="is-rounded my-class">Sign Up</CoolButton>
      </div>
    )
  }
}


export default Signup
